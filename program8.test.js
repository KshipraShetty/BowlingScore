const fn = require('./program8');

test('the result should be 5', () => {
  expect(fn(4, 6)).toBe(5);
});

test('Check for no arguments', () => {
  expect(fn()).toBe(0.5);
});

test('Check for negative numbers', () => {
  expect(fn(-1, -3)).toBe(-2);
});
