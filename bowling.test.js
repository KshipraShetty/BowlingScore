const a = require('./bowling');

test('Check for empty array', () => {
  expect(a([])).toBe(0);
});

test('Check for base case with no strikes and spares', () => {
  expect(a([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
});


/*
descibe('check for empty input', () =>
  it('Result should be 0', () =>
    expect(a([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90)));
*/
