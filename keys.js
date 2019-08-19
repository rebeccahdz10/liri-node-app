console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET,
    name: "Random Name",
};

exports.omdb = {
    id: process.env.OMDB_ID,
};

exports.bandsInTown = {
    id: process.env.BIT_ID,
};
