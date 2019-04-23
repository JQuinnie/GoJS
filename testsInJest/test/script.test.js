const moogleSearch = require('../script');

// this is a mock database
const dbMock = [
  'mock.com',
  'mock2.com',
  'mock3.com',
  'mock4.com',
  'nba.com',
];

describe('first Jest test', () => {
  it('passes an example test', () => {
    expect('hello world').toBe('hello world');
  });
});

describe('moogleSearch', () => {
  it('is searching moogle', () => {
    expect(moogleSearch('test', dbMock)).toEqual([]);
    expect(moogleSearch('mock', dbMock)).toEqual(['mock.com', 'mock2.com', 'mock3.com']);
  });

  it('works with undefined and null input', () => {
    expect(moogleSearch(undefined, dbMock)).toEqual([]);
    expect(moogleSearch(null, dbMock)).toEqual([]);
  });

  it('does not return more than 3 matches', () => {
    expect(moogleSearch('.com', dbMock).length).toEqual(3);
  });
});
