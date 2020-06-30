import Route from '@ember/routing/route';

export default class MembersMemberRoute extends Route {
  model(params) {
    return this.store.query('member', params).then(function (records) {
      return records.firstObject;
    });
  }
}
