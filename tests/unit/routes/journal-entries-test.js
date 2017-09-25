import { moduleFor, test } from 'ember-qunit';

moduleFor('route:journal-entries', 'Unit | Route | journal entries', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function (assert) {
  assert.expect(1);
  let route = this.subject();
  assert.ok(route);
});
