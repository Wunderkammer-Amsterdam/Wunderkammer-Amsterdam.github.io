import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Ember from 'ember';
import computed from '@ember/object';

interface SectionMembersArgs {}

export default class SectionMembers extends Component<SectionMembersArgs> {
  members = [
    {
      id: 'bas',
      title: 'Bas',
      profileImageSrc: '/assets/images/impressions/cc71f6cb-7560-479b-bb59-03d00e18b780.jpg',
      intro: 'Web Developer',
    },
    {
      id: 'tom',
      title: 'Tom',
      profileImageSrc: '/assets/images/impressions/2fd8d139-fb60-47c9-9097-8618b6c91cba.jpg',
      intro: 'Freelance Consultant, Quant Developer',
    },
    {
      id: 'moniek',
      title: 'Moniek',
      profileImageSrc: '/assets/images/impressions/292ae6ba-2e35-4153-b423-917f2032f76f.jpg',
      intro: 'Video vrouw',
    },
    {
      id: 'eric',
      title: 'Eric',
      profileImageSrc: '/assets/images/impressions/77352f2d-28eb-4ed5-a3b6-0b2c13d2ad0e.jpg',
      intro: 'Organiser',
    },
    {
      id: 'masja',
      title: 'Masja',
      profileImageSrc: '/assets/images/impressions/a2ede6e0-7063-484d-9189-3dda86fce813.jpg',
      intro: 'Social media entrepreneur',
    },
    {
      id: 'karim',
      title: 'Karim & Laura',
      profileImageSrc: '/assets/images/impressions/a2ede6e0-7063-484d-9189-3dda86fce813.jpg',
      intro: 'Researchers',
    },
    {
      id: 'michael',
      title: 'Michael',
      profileImageSrc: '/assets/images/impressions/a2ede6e0-7063-484d-9189-3dda86fce813.jpg',
      intro: 'UX Designer',
    },
    {
      id: 'peter',
      title: 'Peter',
      profileImageSrc: '/assets/images/impressions/a2ede6e0-7063-484d-9189-3dda86fce813.jpg',
      intro: 'Docent',
    },
    {
      id: 'joanne',
      title: 'Joanne',
      profileImageSrc: '/assets/images/impressions/a2ede6e0-7063-484d-9189-3dda86fce813.jpg',
      intro: 'Journalist',
    },
    {
      id: 'Suzanne',
      title: 'Suzanne',
      profileImageSrc: '/assets/images/impressions/a2ede6e0-7063-484d-9189-3dda86fce813.jpg',
      intro: 'Sociaal ondernemer',
    },
  ];

  @tracked
  activeMember;

  get nextAvailableMember() {
    if (!this.activeMember) {
      return null;
    }
    const activeIndex = this.members.findIndex((item) => this.activeMember.id === item.id);

    if (activeIndex >= this.members.length + 1) {
      return null;
    }

    return this.members[activeIndex + 1];
  }

  @action
  activateMember(member) {
    this.activeMember = member;
  }
}
