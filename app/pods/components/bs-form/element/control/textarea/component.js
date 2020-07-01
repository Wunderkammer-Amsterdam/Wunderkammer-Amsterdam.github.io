import { action, computed } from '@ember/object';
import BaseControl from 'ember-bootstrap/components/bs-form/element/control';
import formValidationClass from 'ember-bootstrap/utils/cp/form-validation-class';
import sizeClass from 'ember-bootstrap/utils/cp/size-class';
import defaultValue from 'ember-bootstrap/utils/default-decorator';
import { tagName } from '@ember-decorators/component';

@tagName('')
export default class TextDate extends BaseControl {
  classTypePrefix = 'form-control';

  @defaultValue
  size = null;

  @formValidationClass('validationType')
  formValidationClass;

  @sizeClass('form-control', 'size')
  sizeClass;

  @computed('classTypePrefix', 'formValidationClass', 'inlineClass', 'sizeClass')
  get classNamesProxy() {
    return [this.classTypePrefix, this.sizeClass, this.formValidationClass].join(' ');
  }

  @action
  onKeyDown(event) {
    // const key = event.key || event.keyCode === 13 ? 'Enter' : null;

    if (event.keyCode === 13 && !event.ctrlKey) {
      event.preventDefault();
      document.execCommand('insertText', false, '\n');
    }

    const element = event.target;

    this.onChange(element.value);
  }

  @action
  onKeyUp(event) {
    const element = event.target;

    this.onChange(element.value);
  }
}
