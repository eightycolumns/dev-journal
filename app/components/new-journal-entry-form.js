import Ember from 'ember';

export default Ember.Component.extend({
  date: new Date(),

  actions: {
    setDate(date) {
      this.set('date', date);
    }
  }
});
