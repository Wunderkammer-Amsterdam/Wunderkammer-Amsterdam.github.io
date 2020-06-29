import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SectionMembersMemberComponent extends Component {
  @tracked topDiff = 0;

  @action
  repositionSelf(element, [member]) {
    const section = element.closest('section');
    if (!section) {
      return;
    }

    const membersList = section.querySelector('ul');
    if (!membersList) {
      return;
    }

    const memberListItem = membersList.querySelector(`li[data-slug=${member.slug}]`);
    if (!memberListItem) {
      return;
    }

    const topDiff = memberListItem.offsetTop - membersList.offsetTop;

    this.topDiff = topDiff;
  }

  get cssProperties() {
    return {
      marginTop: `${this.topDiff}px`,
      transition: 'margin-top .35s ease',
    };
  }
}
