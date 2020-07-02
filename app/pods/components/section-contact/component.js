import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { Changeset } from 'ember-changeset';
import { action } from '@ember/object';
import { ContactForm, ContactFormValidations } from '../../../changesets/contact-form';
import lookupValidator from 'ember-changeset-validations';

export default class SectionContactComponent extends Component {
  @tracked changeset;
  @tracked showAllValidations = false;
  @tracked isSubmitted = false;

  @tracked reCaptchaReference;

  constructor(...rest) {
    super(...rest);

    this.changeset = new Changeset(new ContactForm(), lookupValidator(ContactFormValidations), ContactFormValidations);
  }

  @action
  onSubmit() {
    this.changeset.validate().then(() => {
      if (this.changeset.isInvalid) {
        this.showAllValidations = true;
      } else {
        this.changeset.save().then((result) => {
          console.log(result);

          if (result['success'] === true) {
            this.isSubmitted = true;
          }
        });
      }
    });
  }

  @action
  onCaptchaResolved(token) {
    this.changeset.reCaptchaToken = token;
    console.log(token, this.changeset.changes);
    this.changeset.validate();
  }

  @action
  onCaptchaExpired() {
    this.changeset.reCaptchaToken = null;
    console.log(this.changeset.changes);
    this.changeset.validate();
    this.reCaptchaReference.resetReCaptcha();
  }
}
