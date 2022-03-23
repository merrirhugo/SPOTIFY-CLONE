const connection = require("../connection");

connection.connect()

connection.query("SELECT albums.id, albums.name 'album_name', albums.cover, albums.cover_small, albums.release_date, albums.popularity FROM albums JOIN artists ON albums.artist_id = artists.id ORDER BY RAND() LIMIT 6", (err, rows, fields) => {
    if (err) throw err
    exports.results6albums = rows;
})