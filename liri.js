require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("./spotify.js");
// var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
// var omdb = new OMDB(keys.omdb);
// var bandsInTown = new BandsInTown(keys.bandsInTown);

var command = process.argv[2];
var term = process.argv.slice(3).join("");

if (!command) {
    command = "none";
}

if (command == "none") {
    // spotify.findSong(term);
    console.log("You gotta gimme something!");
}
if (command == "song") {
    console.log("Searching Spotify...");
    spotify.findSong(term);
}
