import Component from '@glimmer/component';
import { task, timeout } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
import { Changeset } from 'ember-changeset';
import { action } from '@ember/object';
import { ContactForm, ContactFormValidations } from '../../../changesets/contact-form';
import lookupValidator from 'ember-changeset-validations';

export default class SectionContactComponent extends Component {
  @tracked changeset;
  @tracked showAllValidations = false;

  @tracked gRecaptcha;

  constructor(...rest) {
    super(...rest);

    this.changeset = new Changeset(new ContactForm(), lookupValidator(ContactFormValidations), ContactFormValidations);
  }

  @task(function*() {
    yield timeout(this.advanceDelay);

    this.currentIndex = (this.currentIndex + 1) % this.images.length;

    this.animateTask.perform();
  })
  animateTask;

  @action
  onSubmit() {
    this.changeset.validate().then(() => {
      if (this.changeset.isInvalid) {
        this.showAllValidations = true;
      } else {
        this.changeset.save();

        console.log(this.changeset.data);
      }
    });
  }

  @action
  onCaptchaResolved(reCaptchaResponse) {
    console.log('resolved', reCaptchaResponse);

    this.changeset.reCaptachResponse = reCaptchaResponse;
  }

  @action
  onCaptchaExpired() {
    console.log('expired');
    this.gRecaptcha.resetReCaptcha();
  }
}
