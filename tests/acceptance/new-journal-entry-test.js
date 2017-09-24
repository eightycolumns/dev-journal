import { test } from 'qunit';
import moduleForAcceptance from 'dev-journal/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | new journal entry');

test('it is accessible via /new-journal-entry', (assert) => {
  visit('/new-journal-entry');
  andThen(() => assert.equal(currentURL(), '/new-journal-entry'));
});
