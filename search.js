var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");

// var omdb = new OMDB(keys.omdb);
// var bandsInTown = new BandsInTown(keys.bandsInTown);

var search = function () {
    var divider = "\n------------------------------------------------------------\n\n";

    this.findSong = function (term) {

        console.log("I'm still trying!");

        var spotify = new Spotify(keys.spotify);

        spotify.search({ type: 'track', query: term, limit: 10 }, function (err, response) {

            if (err) {
                return console.log('Error occurred: ' + err);
            }
            else {
                console.log(response);
                var song = response.tracks.items

                for (var i = 0; i < song.length; i++) {
                    var jsonData = JSON.parse(response.data[i].tracks.items);

                    var artistData = [
                        "Name: " + jsonData.artists.name,
                        "Song: " + jsonData.name,
                        "Link: " + jsonData.preview_url,
                        "Album: " + jsonData.album.name
                    ].join("\n\n");

                    fs.appendFile("log.txt", artistData + divider, function (err) {
                        if (err) throw (err);
                    });
                    console.log(response);
                };
            };
        });
    };

    // var omdb = function () {
    //     this.findMovie = function (movie) {
    //         var URL = ;
    //     }
};
module.exports = search
// module.exports = omdb