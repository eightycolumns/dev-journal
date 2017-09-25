import { test } from 'qunit';
import moduleForAcceptance from 'dev-journal/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | not found');

test("it's the fallback when no other routes match", function (assert) {
  assert.expect(1);

  visit('/foobar');

  andThen(() => {
    const header = document.querySelector('#not-found h2');
    assert.strictEqual(header.textContent, '404 Not Found');
  });
});
