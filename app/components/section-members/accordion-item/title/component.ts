import { action } from '@ember/object';
import Component from '@glimmer/component';
import { assert } from '@ember/debug';

interface SectionMembersAccordionItemTitleArgs {}

export default class SectionMemberAccordionItemTitle extends Component<SectionMembersAccordionItemTitleArgs> {
  constructor(owner: unknown, args: SectionMembersAccordionItemTitleArgs) {
    super(...arguments);

    assert(`onClick must be given as argument to SectionMemberAccordionItemTitle`, typeof args.onClick === 'function');
  }

  @action
  handleClick(e) {
    e.preventDefault();
    if (!this.args.disabled) {
      this.args.onClick();
    }
  }
}
