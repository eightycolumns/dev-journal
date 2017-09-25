import { formatDateString } from 'dev-journal/helpers/format-date-string';
import { module, test } from 'qunit';

module('Unit | Helper | format date string');

test('it formats a date string for display', assert => {
  const dateString = '2017-09-22T04:00:00.000Z';
  assert.strictEqual(formatDateString([dateString]), '22 September 2017');
});
