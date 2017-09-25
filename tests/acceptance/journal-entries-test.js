import moduleForAcceptance from 'dev-journal/tests/helpers/module-for-acceptance';
import { test } from 'qunit';

moduleForAcceptance('Acceptance | journal entries');

test('it is accessible via /journal-entries', assert => {
  assert.expect(1);
  visit('/journal-entries');
  andThen(() => assert.equal(currentURL(), '/journal-entries'));
});

test('it is accessible via /', assert => {
  assert.expect(1);
  visit('/');
  andThen(() => assert.equal(currentURL(), '/journal-entries'));
});

test('it allows the user to delete a journal entry', assert => {
  assert.expect(2);

  visit('/new-journal-entry');

  fillIn('#title', 'Journal Entry Title');
  fillIn('#text', 'Journal entry...');

  click('.publish');

  visit('/new-journal-entry');

  fillIn('#title', 'Another Journal Entry Title');
  fillIn('#text', 'Another journal entry...');

  click('.publish');

  click('.journal-entry .delete');

  andThen(() => {
    const titleField = document.querySelector('.journal-entry h3');
    assert.equal(titleField.textContent, 'Journal Entry Title');

    const textField = document.querySelector('.journal-entry .text');
    assert.equal(textField.textContent, 'Journal entry...');
  });
});
