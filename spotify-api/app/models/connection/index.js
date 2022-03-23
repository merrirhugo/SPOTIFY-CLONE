const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "tweet_academy",
    password: "admin",
    database: "database_music",
});

module.exports = connection;