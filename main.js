const fs = require("fs");
const process = require("process");
const axios = require("axios");

const dadJokeApiUrl = "https://icanhazdadjoke.com/search?term=";


const searchTerm = process.argv[2];

axios
  .get(dadJokeApiUrl + searchTerm)
  .then((response) => {
    const jokes = response.data.results;

    if (jokes.length === 0) {
      console.log("No jokes found for that search term.");
      return;
    }


    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

 
    fs.writeFileSync("jokes.txt", randomJoke.joke);


    console.log(randomJoke.joke);
  })
  .catch((error) => {
    console.log(error);
  });
