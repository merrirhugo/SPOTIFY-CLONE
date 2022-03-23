const connection = require("../connection");

connection.connect()

connection.query("SELECT genres.name FROM genres_albums JOIN genres ON genres_albums.genre_id = genres.id JOIN albums ON genres_albums.album_id = albums.id WHERE albums.id = 1;", (err, rows, fields) => {
    if (err) throw err
    exports.album_genres = rows;
})