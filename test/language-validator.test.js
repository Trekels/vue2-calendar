const validator = require('../src/utils/language-validator').default;

/* eslint-disable */

describe('When no parameters passes', () => {
  it('a empty array should be returned', () => {
    expect(validator()).toEqual([]);
  });
});

describe('When an empty object passed', () => {
  it('a empty array should be returned', () => {
    expect(validator({})).toEqual([]);
  });
});

describe('When passed empty language object', () => {
  it('should return an empty array since the en obj is invalid', () => {
    expect(validator({
      en: {
        // No further lang data
      }
    })).toEqual([]);
  });
});

describe('When a correct language object is passes', () => {
  it('should not return any error messages', () => {
    expect(validator({
      en: {
        showMore: 'Show more',
        dayNameShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNameLong: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        monthNameShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
        monthNameLong: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      }
    })).toEqual(['en']);
  });
})
