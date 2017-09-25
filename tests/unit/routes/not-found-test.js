import { moduleFor, test } from 'ember-qunit';

moduleFor('route:not-found', 'Unit | Route | not found', {});

test('it exists', function (assert) {
  assert.expect(1);
  let route = this.subject();
  assert.ok(route);
});
