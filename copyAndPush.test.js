import copyAndPush from './copyAndPush';

describe('copyAndPush', () => {
  it('copies an array returning a new array with a new item at the end', () => {
    const numbers = [1, 2, 3];
    const expected = [1, 2, 3, 4];
    const actual = copyAndPush(numbers, 4);
      
    expect(actual).toEqual(expected);
  });
});
