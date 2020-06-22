import Component from '@glimmer/component';
import ENV from 'wunderkammer/config/environment';
import fetch from 'fetch';
import { action, computed } from '@ember/object';
import { isNone } from '@ember/utils';
import { NotFoundError } from '@ember-data/adapter/error';
import { task } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';

const {
  APP: { version },
} = ENV;

export default class MarkdownFromUrlComponent extends Component {
  minHeight = null;
  minWidth = null;
  replaceHash = null;

  currentUrl = null;
  @tracked markdown = null;

  @action
  initiateLoad(element, [url]) {
    this.markdown = false;

    if (this.currentUrl === url) {
      return;
    }

    this.currentUrl = url;

    this.setupTask.perform(url).then((markdown) => {
      if (typeof markdown === 'string') {
        if (!isNone(this.replaceHash)) {
          for (let key in this.replaceHash) {
            markdown = markdown.replace(new RegExp(`\\[${key}\\]`, 'g'), this.replaceHash[key]);
          }
        }

        this.markdown = markdown;
      }
    });
  }

  @computed('args.{minHeight,minWidth}', 'setupTask.isRunning')
  get cssProperties() {
    const hash = {
      overflow: 'hidden',
    };

    if (this.setupTask.isRunning) {
      if (this.args.minHeight) {
        hash['min-height'] = this.args.minHeight;
      }
      if (this.args.minWidth) {
        hash['min-width'] = this.args.minWidth;
      }
    }

    return hash;
  }

  @(task(function*(url) {
    let result;
    try {
      result = yield this.fetchMarkdownTask.perform(url);
    } catch (error) {
      switch (true) {
        case error instanceof NotFoundError:
          //          if (locale !== 'en') {
          //           result = yield this.setupTask.perform(key, 'en');
          //        } else {
          result = 404;
          //      }
          break;
        default:
          result = false;
      }
    }

    return result;
  }).enqueue())
  setupTask;

  @task(function*(url) {
    url = `${url}?_=${version}`;

    return yield fetch(url).then((response) => {
      if (response.ok) {
        return response.text();
      } else if (response.status === 404) {
        throw new NotFoundError();
      } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    });
  })
  fetchMarkdownTask;
}
