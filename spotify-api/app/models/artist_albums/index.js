const connection = require("../connection");

connection.connect()

connection.query("SELECT albums.name, albums.release_date, albums.cover FROM albums JOIN artists ON albums.artist_id = artists.id WHERE artists.id = ", (err, rows, fields) => {
    if (err) throw err
    exports.artist_albums = rows;
})
