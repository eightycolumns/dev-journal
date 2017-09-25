import Ember from 'ember';

export default Ember.Component.extend({
  date: new Date(),
  mood: 'Happy!',

  actions: {
    publish(title, date, mood, text) {
      this.publish(title, date, mood, text);
    },

    setDate(date) {
      this.set('date', date);
    },

    setMood(mood) {
      this.set('mood', mood);
    }
  }
});
