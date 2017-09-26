import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete(journalEntryToDelete) {
      let journalEntries = JSON.parse(localStorage.getItem('journalEntries'));

      journalEntries = journalEntries.filter(
        journalEntry => journalEntry.id !== journalEntryToDelete.id
      );

      localStorage.setItem('journalEntries', JSON.stringify(journalEntries));

      this.refresh();
    }
  },

  model() {
    if (!localStorageIsInitialized()) {
      initializeLocalStorage();
    }

    return JSON.parse(localStorage.getItem('journalEntries'));
  }
});

function localStorageIsInitialized() {
  return localStorage.getItem('journalEntries');
}

function initializeLocalStorage() {
  const journalEntries = [
    {
      id: 1,
      title: "Isn't Tomster Awesome?",
      date: '23 September 2017',
      mood: 'Happy!',
      text: "Today I started learning Ember. It's described as \"a framework for creating ambitious web applications\", and it seems pretty neat. But you know why I'm REALLY excited about Ember? Its mascot Tomster is a hamster, just like me! How cool is that?"
    },
    {
      id: 2,
      title: 'What an Ecosystem!',
      date: '24 September 2017',
      mood: 'Happy!',
      text: "The Ember ecosystem is kind of awesome. Ember's website has lots of guides and tutorials, the Ember CLI tool generates skeletal applications in seconds, and WOW there are tons of addons! It's no wonder people like this framework."
    },
    {
      id: 3,
      title: 'Learning QUnit',
      date: '24 September 2017',
      mood: 'Meh...',
      text: "Learning to test Ember with QUnit has been a bit of an adjustment. In the past I've only used Jasmine for JavaScript. But I'm starting to get the hang of it. Just need more practice!"
    },
    {
      id: 4,
      title: 'My First Ember App',
      date: '25 September 2017',
      mood: 'Happy!',
      text: "Yay, my app works! Pretty good for a hamster, right? Hehe, just kidding. It's alright, but I've still got a long way to go. Getting to know Ember this week has been a treat, but I've really only scratched the surface."
    }
  ];

  localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
}
