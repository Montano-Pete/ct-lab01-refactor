import capitalizeAndFilter from './capitalizeAndFilter';

describe('capitalizeAndFilter', () => {
  it('capitalizes all strings within an array and filters out strings starting with F/f', () => {
    const arrOfStrings = ['hello', 'world', 'fine', 'day', 'today'];
    const expected = ['HELLO', 'WORLD', 'DAY', 'TODAY'];
    const actual = capitalizeAndFilter(arrOfStrings, 'f');
    
    expect(actual).toEqual(expected);
  });

  it('capitalizes all strings within an array and filters out strings starting with W/w', () => {
    const arrOfStrings = ['hello', 'world', 'fine', 'day', 'today'];
    const expected = ['HELLO', 'FINE', 'DAY', 'TODAY'];
    const actual = capitalizeAndFilter(arrOfStrings, 'w');
    
    expect(actual).toEqual(expected);
  });
});
