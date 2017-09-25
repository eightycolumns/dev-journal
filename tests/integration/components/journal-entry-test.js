import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('journal-entry', 'Integration | Component | journal entry', {
  integration: true
});

const journalEntry = {
  title: 'Journal Entry Title',
  date: '2017-09-22T04:00:00.000Z',
  mood: 'Happy!',
  text: 'Journal entry text...'
};

test('it renders the header correctly', function (assert) {
  this.set('journalEntry', journalEntry);
  this.render(hbs`{{journal-entry journal-entry=journalEntry}}`);
  const header = document.querySelector('.journal-entry h3');
  assert.ok(header);
  assert.equal(header.textContent, 'Journal Entry Title');
});

test('it renders the date correctly', function (assert) {
  this.set('journalEntry', journalEntry);
  this.render(hbs`{{journal-entry journal-entry=journalEntry}}`);
  const header = document.querySelector('.journal-entry .date');
  assert.ok(header);
  assert.equal(header.textContent, '22 September 2017');
});

test('it renders the mood correctly', function (assert) {
  this.set('journalEntry', journalEntry);
  this.render(hbs`{{journal-entry journal-entry=journalEntry}}`);
  const header = document.querySelector('.journal-entry .mood');
  assert.ok(header);
  assert.equal(header.textContent, 'Mood: Happy!');
});

test('it renders the text correctly', function (assert) {
  this.set('journalEntry', journalEntry);
  this.render(hbs`{{journal-entry journal-entry=journalEntry}}`);
  const header = document.querySelector('.journal-entry .text');
  assert.ok(header);
  assert.equal(header.textContent, 'Journal entry text...');
});
