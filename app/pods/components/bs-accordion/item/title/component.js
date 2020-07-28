import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TitleComponent extends Component {
  @action
  onClick(e) {
    e.preventDefault();

    if (!this.args.disabled) {
      this.args.onClick();
    }
  }
}
