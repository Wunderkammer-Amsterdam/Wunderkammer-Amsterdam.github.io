import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

const list = [];

export default class SectionComponent extends Component {
  @service inViewport;

  @action
  onViewIn(element) {
    if (!this.args.routeId) {
      return;
    }

    list.push(this.args.routeId);
    console.log('in-view', list);
  }

  @action
  onViewLeave(element) {
    if (!this.args.routeId) {
      return;
    }

    list.removeObject(this.args.routeId);
  }

  @action
  didInsertNode() {
    alert(1);
    const loader = document.getElementById('loader');
    const viewportTolerance = { bottom: 200 };
    const { onEnter, _onExit } = this.inViewport.watchElement(loader, { viewportTolerance });
    // pass the bound method to `onEnter` or `onExit`
    onEnter(this.didEnterViewport.bind(this));
  }

  didEnterViewport() {
    // do some other stuff
    // this.infinityLoad();
  }

  // willDestroy() {
  //   // need to manage cache yourself if you don't use the mixin
  //   const loader = document.getElementById('loader');
  //   this.inViewport.stopWatching(loader);
  //
  //   super.willDestroy(...arguments);
  // }
}
