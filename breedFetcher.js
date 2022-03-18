const request = require("request");

const breed = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
request(url, function(error, response, body) {
  if (error) {
    return console.log('Failed to request details:', error);
  }
  const data = JSON.parse(body);
  const breedName = data[0];
  if (!breedName) {
    console.log(`Breed name ${breed[0]} does not exist.`);
  } else {
    console.log(breedName.description);
  }
}
);