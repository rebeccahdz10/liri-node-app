require("dotenv").config();
var keys = require("./keys.js");
var search = require("./search.js");

var search = new search();

var command = process.argv[2];
var term = process.argv.slice(3).join("");

if (!command) {
    command = "none";
}
if (!term) {
    term = "none";
}
if (command == "none") {
    console.log("You gotta gimme something! Try one of these commands:");
    console.log("song, movie, or concert");
}
if (command == "song") {
    if (term == "none") {
        console.log("Really, bro? Gimme a song!");
    } else {
        console.log("Searching Spotify...");
        search.findSong(term);
    }
}
