import fetchQuotes from './fetchQuotes';

describe('fetchQuotes', () => {
  it('fetches Futurama Quote API and returns a single quote in desired format', async () => {
    const expected = await fetchQuotes();
      
    expect({ name: expect.anything(), text: expect.anything(), image: expect.anything(), })
      .toEqual(expected);
  });
});
