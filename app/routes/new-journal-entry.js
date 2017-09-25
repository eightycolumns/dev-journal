import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    publish(title, date, mood, text) {
      const journalEntries = JSON.parse(localStorage.getItem('journalEntries'));

      const newJournalEntry = {
        id: generateId(),
        title: title,
        date: date,
        mood: mood,
        text: text
      };

      journalEntries.push(newJournalEntry);

      localStorage.setItem('journalEntries', JSON.stringify(journalEntries));

      this.transitionTo('journal-entries');
    }
  }
});

function generateId() {
  return Math.random().toString(36).substr(2, 16);
}
