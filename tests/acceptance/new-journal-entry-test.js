import moduleForAcceptance from 'dev-journal/tests/helpers/module-for-acceptance';
import { test } from 'qunit';

moduleForAcceptance('Acceptance | new journal entry');

test('it is accessible via /new-journal-entry', assert => {
  assert.expect(1);
  visit('/new-journal-entry');
  andThen(() => assert.strictEqual(currentURL(), '/new-journal-entry'));
});

test('it allows the user to create a new journal entry', assert => {
  assert.expect(2);

  visit('/new-journal-entry');

  fillIn('#title', 'Journal Entry Title');
  fillIn('#text', 'Journal entry...');

  click('.publish');

  andThen(() => {
    const titleField = document.querySelector('.journal-entry h2');
    assert.strictEqual(titleField.textContent, 'Journal Entry Title');

    const textField = document.querySelector('.journal-entry .text');
    assert.strictEqual(textField.textContent, 'Journal entry...');
  });
});
