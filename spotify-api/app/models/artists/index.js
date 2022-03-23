const connection = require("../connection");

connection.connect()

connection.query("SELECT id, name, description, photo FROM artists", (err, rows, fields) => {
    if (err) throw err
    exports.results_artists = rows;
})
