import Component from '@glimmer/component';

export default class SectionMembersComponent extends Component {
  get members() {
    return this.args.members || [];
  }
}
