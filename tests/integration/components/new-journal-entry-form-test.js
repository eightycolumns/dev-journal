import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-journal-entry-form', 'Integration | Component | new journal entry form', {
  integration: true
});

test('it has a title field', function (assert) {
  this.render(hbs`{{new-journal-entry-form}}`);
  document.querySelector('#title').value = 'Journal Entry Title';
  const titleField = document.querySelector('#title');
  assert.equal(titleField.value, 'Journal Entry Title');
});

test('it has a text field', function (assert) {
  this.render(hbs`{{new-journal-entry-form}}`);
  document.querySelector('#text').value = 'Journal entry text...';
  const textField = document.querySelector('#text');
  assert.equal(textField.value, 'Journal entry text...');
});

test('it has a publish button', function (assert) {
  this.render(hbs`{{new-journal-entry-form}}`);
  const publishButton = document.querySelector('#new-journal-entry button');
  assert.equal(publishButton.textContent, 'Publish');
});
