const errors = new Map([
  [1, 'First error!'],
  [2, 'Second error!'],
  [3, 'Third error!'],
]);

export default class ErrorRepository {
  translate(code) {
    if (errors.get(code) === undefined) {
      return 'Unknown error!';
    }
    return errors.get(code);
  }
}
