import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | impressions', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:impressions');
    assert.ok(route);
  });
});
