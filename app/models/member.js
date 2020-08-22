import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class MemberModel extends Model {
  @attr('string') title;
  @attr('string') slug;
  @attr('string') tagLine;
  @attr('boolean', { defaultValue: true }) active;

  get profileImgLargeSrc() {
    return '/' + ['members', this.slug, ['profile-large', 'jpg'].join('.')].join('/');
  }
  get profileImgSmallSrc() {
    return '/' + ['members', this.slug, ['profile-small', 'jpg'].join('.')].join('/');
  }
  get profileTextSrc() {
    return '/' + ['members', this.slug, ['about', 'md'].join('.')].join('/');
  }
}
