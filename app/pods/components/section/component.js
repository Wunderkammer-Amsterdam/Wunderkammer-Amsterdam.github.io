import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

const list = [];

export default class SectionComponent extends Component {
  @service inViewport;
  @service router;

  @action
  onViewIn(element) {
    if (!this.args.routeId) {
      return;
    }

    list.push(this.args.routeId);

    const route = this.args.routeId !== 'home' ? this.args.routeId : 'application';

    if (!this.router.currentRoute.name.startsWith(route)) {
      this.router.transitionTo(route);
    }
  }

  @action
  onViewLeave(element) {
    if (!this.args.routeId) {
      return;
    }

    list.removeObject(this.args.routeId);
  }

  @action
  sectionInserted(element) {
    const name = this.router.currentRouteName.split('.').shift();

    if (this.args.routeId === name) {
      window.scrollTo({ top: element.offsetTop });
      // element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }

  get classIdentifier() {
    return `section-${this.args.routeId}`;
  }
}
