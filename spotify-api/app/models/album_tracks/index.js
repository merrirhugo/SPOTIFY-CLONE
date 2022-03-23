const connection = require("../connection");

connection.connect()

connection.query("SELECT tracks.id, tracks.track_no, tracks.name, tracks.duration, tracks.mp3 FROM tracks JOIN albums ON tracks.album_id = albums.id WHERE albums.id = 1 ORDER BY tracks.track_no;", (err, rows, fields) => {
    if (err) throw err
    exports.album_tracks = rows;
})