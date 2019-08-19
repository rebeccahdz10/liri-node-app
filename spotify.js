var axios = require("axios");
var fs = require("fs");

var spotify = function () {
    var divider = "\n------------------------------------------------------------\n\n";

    this.findSong = function (song) {
        var URL = "https://api.spotify.com/v1/search?q=" + song + "&type=track&limit=10";

        ajax.get(URL).then(function (err, response, body) {
            var jsonData = JSON.parse(body);

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
        });
    };
};


module.exports = spotify;