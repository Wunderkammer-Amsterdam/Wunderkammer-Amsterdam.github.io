import Route from '@ember/routing/route';

export default class MembersRoute extends Route {
  model(params) {
    return this.store.query('member', params).then(function (records) {
      return records.firstObject;
    });
  }
}
