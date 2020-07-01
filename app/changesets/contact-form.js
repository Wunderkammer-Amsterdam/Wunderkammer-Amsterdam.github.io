import { validatePresence, validateLength, validateFormat } from 'ember-changeset-validations/validators';

class ContactForm {
  name = '';
  subject = '';
  message = '';

  async save() {
    alert(1);
  }
}

const ContactFormValidations = {
  name: [validatePresence({ presence: true, ignoreBlank: true, description: 'naam' }), validateLength({ max: 30, description: 'naam' })],
  subject: [validatePresence({ presence: true, ignoreBlank: true, description: 'onderwerp' }), validateLength({ max: 120, description: 'onderwerp' })],
  message: [validatePresence({ presence: true, ignoreBlank: true, description: 'boodschap' }), validateLength({ max: 1000, description: 'boodschap' })],
};

export { ContactForm, ContactFormValidations };
