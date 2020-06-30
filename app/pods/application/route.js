import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';

export default class ApplicationRoute extends Route {
  @service router;

  model() {
    return RSVP.hash({
      members: this.store.findAll('member'),
    });
  }

  setupController(controller, model) {
    controller.setProperties(model);
  }

  // redirect(model, transition) {
  //   if ('index' !== transition.to.name) {
  //     const name = transition.to.name.split('.').shift();
  //
  //     scheduleOnce('afterRender', this, () => this.runAfterRender(name));
  //   }
  // }

  runAfterRender(name) {
    const element = document.getElementsByClassName(`section-${name}`)[0] || null;
    console.log(name, element);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }
}
