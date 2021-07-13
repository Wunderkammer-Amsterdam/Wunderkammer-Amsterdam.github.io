import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';

export default class HomeNavService extends Service {
  @service router;

  @tracked _lastActiveRoute;
  @tracked _ignoreViewEvents = true;

  _sectionsInViewPort = [];

  /**
   *
   * @param {Element} element
   */
  onSectionsReady(element) {
    const routeInfo = this.router.recognize(document.location.pathname);

    if (routeInfo && routeInfo.name !== 'home.index') {
      let sectionName = routeInfo.name.split('.').slice(1).shift();
      const sectionElement = element.querySelector(`section.section-${sectionName}`);

      if (sectionElement) {
        window.scrollTo({ top: sectionElement.offsetTop });
      }
    }

    this._ignoreViewEvents = false;
  }

  sectionWentIntoView(id) {
    this._sectionsInViewPort.pushObject(id);
  }

  sectionWentOutOfView(id) {
    this._sectionsInViewPort.removeObject(id);
  }

  @computed('_ignoreViewEvents', '_lastActiveRoute', '_sectionsInViewPort.length')
  get activeRoute() {
    const activeRoute = this._sectionsInViewPort[this._sectionsInViewPort.length - 1];

    if (this._lastActiveRoute !== activeRoute) {
      // eslint-disable-next-line ember/no-side-effects
      this._lastActiveRoute = activeRoute;

      if (!this._ignoreViewEvents) {
        this.router.transitionTo(`home.${activeRoute}`);
      }
    }

    return activeRoute;
  }
}
