const request = require("request");
const breed = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    const breedName = data[0];
    if (!breedName) {
      const breedNameError = (`Breed name ${breed} does not exist.`);
      callback(breedNameError, null);
    } else {
      callback(null, breedName.description);
    }
  }
  );
};
module.exports = { fetchBreedDescription };