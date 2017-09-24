import Ember from 'ember';

export function sortJournalEntries([journalEntries]) {
  return journalEntries.reverse().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

export default Ember.Helper.helper(sortJournalEntries);
