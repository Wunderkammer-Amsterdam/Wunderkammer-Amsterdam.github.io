import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service router;
  @service intl;

  beforeModel() {
    super.beforeModel(...arguments);

    this.intl.setLocale(['nl-nl']);
  }

  model() {
    return RSVP.hash({
      members: this.store.findAll('member'),
    });
  }

  setupController(controller, model) {
    controller.setProperties(model);
  }
}
