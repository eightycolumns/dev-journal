import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    publish(title, date, mood, text) {
      const journalEntries = JSON.parse(localStorage.getItem('journalEntries'));

      const newJournalEntry = {
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
