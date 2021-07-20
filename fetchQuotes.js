import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes');
  const body = await res.json();
    

  return {
    name: body[0].character,
    text: body[0].quote,
    image: body[0].image
  };
};

export default fetchQuotes;
