var axios = require("axios");
var fs = require("fs");



var spotify = function () {
    var divider = "\n------------------------------------------------------------\n\n";

    this.findSong = function (song) {
        var URL = "https://api.spotify.com/v1/authorize?" + "client_id=18d4241390954cc99ba5e4d2e44178f1" + "&response_type=code" + "search?q=" + song + "&type=track&limit=10";
        var sKey = spotify.id;

        axios.get(URL, {
            // headers: {
            //     'Authorization': 'Bearer BQCS6lQakG3OM2_h2bDMLI4AfqURvAHajrSpkqMgIdPxRT-OKedHEUCSq5NFjqE_wfbq5wwZHbSnbyG_2t3dCY4fgz4ty5Jtc7XuJChhl7kAvfDZSzE5kTbppZ7D4xADTpck_WhwdAOarkpTiOM9'
            // }
        }).then(function (response) {
            // var jsonData = JSON.parse(response.data.tracks.items);
            for (var i = 0; i < response.data.tracks.items.length; i++) {
                var track = response.data.tracks[i];

                var artistData = [
                    "Name: " + track.artists.name,
                    "Song: " + track.name,
                    "Link: " + track.preview_url,
                    "Album: " + track.album.name
                ].join("\n\n");
            };

            fs.appendFile("log.txt", artistData + divider, function (err) {
                if (err) throw (err);
                console.log(artistData);
            });
        }).catch(function (error) {

            console.log(error);
        });
    };
};


module.exports = spotify;