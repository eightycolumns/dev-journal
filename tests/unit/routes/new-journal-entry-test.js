import { moduleFor, test } from 'ember-qunit';

moduleFor('route:new-journal-entry', 'Unit | Route | new journal entry', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function (assert) {
  assert.expect(1);
  let route = this.subject();
  assert.ok(route);
});
