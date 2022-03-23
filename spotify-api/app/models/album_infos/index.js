const connection = require("../connection");

connection.connect()

connection.query("SELECT albums.id, albums.name, cover, popularity, albums.release_date, COUNT(tracks.id) 'tracks_number' FROM albums JOIN tracks ON albums.id = tracks.album_id WHERE albums.id = 1 GROUP BY albums.id;", (err, rows, fields) => {
    if (err) throw err
    exports.album_infos = rows;
})