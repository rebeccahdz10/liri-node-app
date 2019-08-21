require("dotenv").config();
var keys = require("./keys.js");
var search = require("./search.js");

var search = new search();
// var spotify = new Spotify(keys.spotify);
// var omdb = new OMDB(keys.omdb);
// var bandsInTown = new BandsInTown(keys.bandsInTown);

var command = process.argv[2];
var term = process.argv.slice(3).join("");

if (!command) {
    command = "none";
}

if (command == "none") {
    console.log("You gotta gimme something!");
}
if (command == "song") {
    console.log("Searching Spotify...");
    search.findSong(term);
}
