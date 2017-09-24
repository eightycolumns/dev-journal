import Ember from 'ember';

export default Ember.Component.extend({
  date: new Date(),

  actions: {
    publish(title, date, text) {
      this.publish(title, date, text);
    },

    setDate(date) {
      this.set('date', date);
    }
  }
});
