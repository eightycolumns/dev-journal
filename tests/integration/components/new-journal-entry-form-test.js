import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-journal-entry-form', 'Integration | Component | new journal entry form', {
  integration: true
});

test('it has a title field', function (assert) {
  this.render(hbs`{{new-journal-entry-form}}`);
  assert.ok(document.querySelector('#title'));
});

test('its date-picker defaults to the current date', function (assert) {
  this.render(hbs`{{new-journal-entry-form}}`);
  const datePicker = document.querySelector('#date');

  const currentDate = new Date();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  assert.equal(datePicker.value, `${day} ${month} ${year}`);
});

test('its mood-picker defaults to "Happy!"', function (assert) {
  this.render(hbs`{{new-journal-entry-form}}`);
  assert.ok(document.querySelector('#happy').checked);
});

test('its mood-picker allows selection of "Meh..."', function (assert) {
  this.render(hbs`{{new-journal-entry-form}}`);
  Ember.run(() => document.querySelector('#meh').click());
  assert.ok(document.querySelector('#meh').checked);
});

test('its mood-picker allows selection of "Sad..."', function (assert) {
  this.render(hbs`{{new-journal-entry-form}}`);
  Ember.run(() => document.querySelector('#sad').click());
  assert.ok(document.querySelector('#sad').checked);
});

test('it has a text field', function (assert) {
  this.render(hbs`{{new-journal-entry-form}}`);
  assert.ok(document.querySelector('#text'));
});

test('it has a "Publish" button', function (assert) {
  this.render(hbs`{{new-journal-entry-form}}`);
  const button = document.querySelector('#new-journal-entry button');
  assert.equal(button.textContent, 'Publish');
});
