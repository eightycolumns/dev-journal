import { sortJournalEntries } from 'dev-journal/helpers/sort-journal-entries';
import { module, test } from 'qunit';

module('Unit | Helper | sort journal entries');

test('it sorts journal entries in reverse chronological order', assert => {
  assert.expect(1);

  const journalEntries = [
    {title: 'Journal Entry #1', date: '21 September 2017'},
    {title: 'Journal Entry #2', date: '22 September 2017'},
    {title: 'Journal Entry #3', date: '22 September 2017'},
    {title: 'Journal Entry #4', date: '23 September 2017'}
  ];

  assert.deepEqual(sortJournalEntries([journalEntries]), [
    {title: 'Journal Entry #4', date: '23 September 2017'},
    {title: 'Journal Entry #3', date: '22 September 2017'},
    {title: 'Journal Entry #2', date: '22 September 2017'},
    {title: 'Journal Entry #1', date: '21 September 2017'}
  ]);
});
