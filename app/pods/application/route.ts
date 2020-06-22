import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import Controller from '@ember/controller';

export default class Application extends Route {
  model() {
    return RSVP.hash({
      members: this.store.findAll('member'),
    });
  }
  setupController(controller: Controller, model: any) {
    controller.setProperties(model);
  }
}
