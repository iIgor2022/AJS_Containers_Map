import ErrorRepository from '../app';

test.each([
  [1, 'First error!'],
  [2, 'Second error!'],
  [3, 'Third error!'],
])('Testing existing error codes', (errorCode, expected) => {
  const errors = new ErrorRepository();
  expect(errors.translate(errorCode)).toBe(expected);
});

test('Testing wrong error code', () => {
  const errors = new ErrorRepository();
  expect(errors.translate(4)).toBe('Unknown error!');
});
