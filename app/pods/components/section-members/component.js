import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SectionMembersComponent extends Component {
  @service router;

  @tracked member;

  @action
  onChange(member) {
    if (member === null) {
      return false;
    }

    this.router.transitionTo('home.members.member', member);
  }
}
