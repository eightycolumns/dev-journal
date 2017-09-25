import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent(
  'new-journal-entry-form',
  'Integration | Component | new journal entry form',
  {integration: true}
);

test('it has a title field', function (assert) {
  assert.expect(1);
  this.render(hbs`{{new-journal-entry-form}}`);
  assert.ok(document.querySelector('#title'));
});

test('its date-picker defaults to the current date', function (assert) {
  assert.expect(3);

  this.render(hbs`{{new-journal-entry-form}}`);
  const datePicker = document.querySelector('#date');
  const date = new Date(datePicker.value);
  const currentDate = new Date();

  assert.strictEqual(date.getDate(), currentDate.getDate());
  assert.strictEqual(date.getMonth(), currentDate.getMonth());
  assert.strictEqual(date.getFullYear(), currentDate.getFullYear());
});

test('its mood-picker defaults to "Happy!"', function (assert) {
  assert.expect(1);
  this.render(hbs`{{new-journal-entry-form}}`);
  assert.ok(document.querySelector('#happy').checked);
});

test('its mood-picker allows selection of "Meh..."', function (assert) {
  assert.expect(1);

  this.render(hbs`{{new-journal-entry-form}}`);
  Ember.run(() => document.querySelector('#meh').click());

  assert.ok(document.querySelector('#meh').checked);
});

test('its mood-picker allows selection of "Sad..."', function (assert) {
  assert.expect(1);

  this.render(hbs`{{new-journal-entry-form}}`);
  Ember.run(() => document.querySelector('#sad').click());

  assert.ok(document.querySelector('#sad').checked);
});

test('it has a text field', function (assert) {
  assert.expect(1);
  this.render(hbs`{{new-journal-entry-form}}`);
  assert.ok(document.querySelector('#text'));
});

test('it has a "Publish" button', function (assert) {
  assert.expect(1);

  this.render(hbs`{{new-journal-entry-form}}`);
  const button = document.querySelector('.publish');

  assert.strictEqual(button.textContent, 'Publish');
});
