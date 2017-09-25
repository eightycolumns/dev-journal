import moduleForAcceptance from 'dev-journal/tests/helpers/module-for-acceptance';
import { test } from 'qunit';

moduleForAcceptance('Acceptance | journal entries');

test('it is accessible via /journal-entries', (assert) => {
  visit('/journal-entries');
  andThen(() => assert.equal(currentURL(), '/journal-entries'));
});

test('it is accessible via /', (assert) => {
  visit('/');
  andThen(() => assert.equal(currentURL(), '/journal-entries'));
});
