import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SectionComponent extends Component {
  @service inViewport;
  @service router;

  @action
  onViewIn(element) {
    if (!this.args.routeId) {
      return;
    }

    const route = this.args.routeId !== 'home' ? this.args.routeId : 'index';

    if (!this.router.currentRoute.name.startsWith(`home.${route}`)) {
      this.router.transitionTo(`home.${route}`);
    }
  }

  @action
  sectionInserted(element) {
    const name = this.router.currentRouteName.split('.').shift();

    if (this.args.routeId === name) {
      window.scrollTo({ top: element.offsetTop });
    }
  }

  get classes() {
    const classes = [];

    classes.push(this.classIdentifier);

    if (this.isActive) {
      classes.push('is-active');
    }

    return classes.join(' ');
  }

  get classIdentifier() {
    return `section-${this.args.routeId}`;
  }

  get isActive() {
    return this.router.currentRoute.name.startsWith(this.args.routeId);
  }
}
