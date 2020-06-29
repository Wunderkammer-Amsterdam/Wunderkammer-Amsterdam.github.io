import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service router;

  model() {
    return RSVP.hash({
      members: this.store.findAll('member'),
    });
  }

  setupController(controller, model) {
    controller.setProperties(model);

    console.log(this);
  }
}
