const a = require('./bowling');

test('Check for empty array', () => {
  expect(a([])).toBe(0);
});

test('Check for base case with no strikes and spares', () => {
  expect(a([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
});

test('Check for case with spare in between', () => {
  expect(a([3, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(94);
});

test('Check for case with spare at the beginning', () => {
  expect(a([3, 6, 6, 4, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(94);
});

test('Check for case with strike at the beginning', () => {
  expect(a([10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(100);
});

test('Check for case with strike in between', () => {
  expect(a([3, 6, 3, 6, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(100);
});

test('Check for not a spare but looks like spare', () => {
  expect(a([3, 6, 1, 8, 2, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(89);
});
/*
descibe('check for empty input', () =>
  it('Result should be 0', () =>
    expect(a([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90)));
*/
