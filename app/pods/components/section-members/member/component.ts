import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface SectionMembersMemberArgs {}

export default class SectionMembersMember extends Component<SectionMembersMemberArgs> {
  @tracked topDiff;

  @action
  repositionSelf(element, [member]) {
    const section = element.closest('section');
    const membersList = section.querySelector('ul');
    const memberListItem = membersList.querySelector(`li[data-slug=${member.slug}]`);

    const topDiff = memberListItem.offsetTop - membersList.offsetTop;
    console.log(member.slug, topDiff);
    this.topDiff = topDiff;
  }

  get cssProperties() {
    return {
      marginTop: `${this.topDiff}px`,
      transition: 'margin-top .35s ease',
    };
  }
}
