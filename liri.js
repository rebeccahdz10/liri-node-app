require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var omdb = new omdb(keys.omdb);

var bandsInTown = new bandsInTown(keys.bandsInTown);

// console.log("This is working");