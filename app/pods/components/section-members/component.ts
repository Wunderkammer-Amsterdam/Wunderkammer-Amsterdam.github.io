import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Member from 'wunderkammer/models/member';

interface SectionMembersArgs {
  members: Member[];
}

export default class SectionMembers extends Component<SectionMembersArgs> {
  get members() {
    return this.args.members || [];
  }

  @tracked activeMember: Member | null = null;

  get nextAvailableMember() {
    if (this.activeMember === null) {
      return null;
    }

    const activeMember: Member = this.activeMember;
    const members = this.members.toArray();
    const activeIndex = members.findIndex((member: Member) => activeMember.id === member.id);

    if (activeIndex >= members.length + 1) {
      return null;
    }

    return members[activeIndex + 1];
  }

  @action
  activateMember(member: Member) {
    this.activeMember = member;
  }
}
