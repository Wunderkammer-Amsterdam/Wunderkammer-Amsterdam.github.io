import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class MembersRoute extends Route {
  model(params) {
    return RSVP.hash({
      members: this.store.findAll('member'),
    });
  }

  setupController(controler, model) {
    this.controllerFor('application').setProperties(model);
  }
}
