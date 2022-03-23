const connection = require("../connection");

connection.connect()

connection.query("SELECT id, name FROM genres", (err, rows, fields) => {
    if (err) throw err
    exports.results_genres = rows;
})
