const moogleSearch = require('../script');

// this is a mock database
const dbMock = [
  'mock.com',
  'mock2.com',
  'mock3.com',
  'mock4.com',
  'nba.com',
];

it('this is an example test', () => {
  expect('hello world').toBe('hello world');
});

it('is searching moogle', () => {
  expect(moogleSearch('test', dbMock)).toEqual([]);
  expect(moogleSearch('mock', dbMock)).toEqual(['mock.com', 'mock2.com', 'mock3.com']);
});
