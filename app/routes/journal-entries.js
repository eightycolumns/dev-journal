import Ember from 'ember';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                   'sed do eiusmod tempor incididunt ut labore et dolore ' +
                   'magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
                   'exercitation ullamco laboris nisi ut aliquip ex ea ' +
                   'commodo consequat. Duis aute irure dolor in ' +
                   'reprehenderit in voluptate velit esse cillum dolore eu ' +
                   'fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
                   'non proident, sunt in culpa qui officia deserunt mollit ' +
                   'anim id est laborum.';

export default Ember.Route.extend({
  model() {
    const journalEntries = [
      {title: 'Journal Entry #1', date: '21 September 2017', text: loremIpsum},
      {title: 'Journal Entry #2', date: '22 September 2017', text: loremIpsum},
      {title: 'Journal Entry #3', date: '22 September 2017', text: loremIpsum},
      {title: 'Journal Entry #4', date: '23 September 2017', text: loremIpsum}
    ];

    return journalEntries;
  }
});
