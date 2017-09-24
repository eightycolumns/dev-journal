import { test } from 'qunit';
import moduleForAcceptance from 'dev-journal/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | journal entries');

test('it is accessible via /journal-entries', (assert) => {
  visit('/journal-entries');
  andThen(() => assert.equal(currentURL(), '/journal-entries'));
});
