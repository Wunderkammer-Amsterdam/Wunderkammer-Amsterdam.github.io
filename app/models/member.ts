import DS from 'ember-data';
const { attr } = DS;

export default class Member extends DS.Model {
  @attr('string')
  title;

  @attr('string')
  slug;

  @attr('string')
  tagLine;

  get profileImgLargeSrc() {
    return '/' + ['members', this.slug, ['profile-large', 'jpg'].join('.')].join('/')
  }

  get profileImgSmallSrc() {
    return '/' + ['members',this.slug, ['profile-small', 'jpg'].join('.')].join('/')
  }

  get profileTextSrc() {
    return '/' + ['members', this.slug, ['about', 'md'].join('.')].join('/')
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'member': Member;
  }
}
