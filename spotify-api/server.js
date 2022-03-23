const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const connection = require("./app/models/connection");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let results_albums = require('./app/models/albums');
let results_artists = require('./app/models/artists');
let results_genres = require('./app/models/genres');
let results6albums = require('./app/models/6Albums');


//Homepage with albums in random order
app.get("/", (req, res) => {
    connection.query(`SELECT albums.id AS 'album_id', albums.name AS 'album_name', albums.cover, albums.cover_small, genres.name AS 'genre_name' FROM genres_albums JOIN albums ON genres_albums.album_id = albums.id JOIN genres ON genres_albums.genre_id = genres.id ORDER BY RAND()`, (err, rows, fields) => {
        if (err) throw err;
        res.json(rows) ;
    })
})

// Get all artists from DB
app.get("/artists", (req, res) => {
    res.json(results_artists);
});

// Get all infos from artist
app.get("/artist_infos/:id", (req, res) => {
    const {id} = req.params;
    connection.query(`SELECT * FROM artists WHERE artists.id = ${id}`, (err, rows, fields) => {
        if (err) throw err;
        res.json(rows) ;
    })
});

// List all albums in id order
app.get("/albums", (req, res) => {
    res.json(results_albums);
});

// List 6 albums in id order
app.get("/6albums", (req, res) => {
    res.json(results6albums);
});


// List all albums made by the artist
app.get("/artist_albums/:id", (req, res) => {
    const {id} = req.params;
    connection.query(`SELECT albums.id AS 'album_id', albums.name 'album_name', albums.cover, albums.cover_small, albums.release_date, albums.popularity FROM albums JOIN artists ON albums.artist_id = artists.id WHERE artists.id = ${id}`, (err, rows, fields) => {
        if (err) throw err;
        res.json(rows) ;
    })
});

// Get infos from the album chosen
app.get("/album_infos/:id", (req, res) => {
    const {id} = req.params;
    connection.query(`SELECT albums.id, albums.description, albums.name, albums.cover, albums.popularity, albums.release_date, COUNT(tracks.id) 'tracks_number', artists.name 'artist' FROM albums JOIN tracks ON albums.id = tracks.album_id JOIN artists ON albums.artist_id = artists.id WHERE albums.id = ${id} GROUP BY albums.id`, (err, rows, fields) => {
        if (err) throw err;
        res.json(rows) ;
    })
});

// Get genres associated with an album
app.get("/album_infos/:id/album_genres", (req, res) => {
    const {id} = req.params;
    connection.query(`SELECT genres.name FROM genres_albums JOIN genres ON genres_albums.genre_id = genres.id JOIN albums ON genres_albums.album_id = albums.id WHERE albums.id = ${id};`, (err, rows, fields) => {
        if (err) throw err;
        res.json(rows) ;
    })
});

// List all genres in id order
app.get("/genres", (req, res) => {
    res.json(results_genres);
});

// Get all tracks from an album
app.get("/album_infos/:id/album_tracks", (req, res) => {
    const {id} = req.params;
    connection.query(`SELECT tracks.id, tracks.track_no, tracks.name, tracks.duration, tracks.mp3 FROM tracks JOIN albums ON tracks.album_id = albums.id WHERE albums.id = ${id} ORDER BY tracks.track_no;`, (err, rows, fields) => {
        if (err) throw err;
        res.json(rows) ;
    }) 
});

// Get all albums with same genre
app.get("/search_by_genre/:genre", (req, res) => {
    const {genre} = req.params;
    connection.query(`SELECT albums.id AS 'album_id', albums.name AS 'album_name', albums.cover, albums.cover_small, genres.name AS 'genre_name' FROM genres_albums JOIN albums ON genres_albums.album_id = albums.id JOIN genres ON genres_albums.genre_id = genres.id WHERE genres.id = '${genre}' OR genres.name LIKE '%${genre}%'`, (err, rows, fields) => {
        if (err) throw err;
        res.json(rows) ;
    }) 
});

// Search request for artist
app.get("/search_artist/:artist_name", (req, res) => {
    const {artist_name} = req.params;
    connection.query(`SELECT * FROM artists WHERE artists.name LIKE '%${artist_name}%'`, (err, rows, fields) => {
        if (err) throw err;
        res.json(rows) ;
    }) 
});

// Search request for album
app.get("/search_album/:album_name", (req, res) => {
    const {album_name} = req.params;
    connection.query(`SELECT * FROM albums WHERE albums.name LIKE '%${album_name}%'`, (err, rows, fields) => {
        if (err) throw err;
        res.json(rows) ;
    }) 
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});