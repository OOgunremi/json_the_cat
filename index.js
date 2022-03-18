// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];
const callback = (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
};
fetchBreedDescription(breedName, callback);