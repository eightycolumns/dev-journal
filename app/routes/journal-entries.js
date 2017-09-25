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
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
                     'elit sed do eiusmod tempor incididunt ut labore et ' +
                     'dolore magna aliqua. Ut enim ad minim veniam, quis ' +
                     'nostrud exercitation ullamco laboris nisi ut aliquip ' +
                     'ex ea commodo consequat. Duis aute irure dolor in ' +
                     'reprehenderit in voluptate velit esse cillum dolore eu ' +
                     'fugiat nulla pariatur. Excepteur sint occaecat ' +
                     'cupidatat non proident, sunt in culpa qui officia ' +
                     'deserunt mollit anim id est laborum.';

  const journalEntries = [
    {
      id: 1,
      title: 'Journal Entry #1',
      date: '21 September 2017',
      mood: 'Happy!',
      text: loremIpsum
    },
    {
      id: 2,
      title: 'Journal Entry #2',
      date: '22 September 2017',
      mood: 'Happy!',
      text: loremIpsum
    },
    {
      id: 3,
      title: 'Journal Entry #3',
      date: '22 September 2017',
      mood: 'Happy!',
      text: loremIpsum
    },
    {
      id: 4,
      title: 'Journal Entry #4',
      date: '23 September 2017',
      mood: 'Happy!',
      text: loremIpsum
    }
  ];

  localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
}
