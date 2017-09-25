import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(journalEntry) {
      this.delete(journalEntry);
    }
  }
});
