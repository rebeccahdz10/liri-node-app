var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");

var search = function () {
    var divider = "\n------------------------------------------------------------\n\n";

    this.findSong = function (term) {

        console.log("I'm trying!");

        var spotify = new Spotify({
            id: "18d4241390954cc99ba5e4d2e44178f1",
            secret: "7316f255d7bb470fb5b788a859143aa8"
        });

        // var term = process.argv.slice(3).join("");

        spotify.search({ type: 'track', query: term }, function (err, response) {

            if (err) {
                return console.log('Error occurred: ' + err);
            }
            else {
                var song = response.tracks.items

                for (var i = 0; i < response.length; i++) {
                    var jsonData = JSON.parse(response.data[i].tracks.items);

                    var artistData = [
                        "Name: " + jsonData.artists.name,
                        "Song: " + jsonData.name,
                        "Link: " + jsonData.preview_url,
                        "Album: " + jsonData.album.name
                    ].join("\n\n");

                    fs.appendFile("log.txt", artistData + divider, function (err) {
                        if (err) throw (err);
                        console.log(artistData);
                    });
                };
                // .catch(function (error) {
                //     console.log(error);
                // });
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