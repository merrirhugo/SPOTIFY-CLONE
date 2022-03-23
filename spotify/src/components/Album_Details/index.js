import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GetCurrentAlbum from '../../hooks/getCurrentAlbum';
import Album_Banner from '../Album_Banner'
import Album_Audio from '../Album_Audio'

export default function Album_Details() {
    const { id } = useParams();

    const [album, getAlbum] = useState('');

    let urlAlbum = `http://localhost:4000/album_infos/${id}`;
    let urlGenre = `http://localhost:4000/album_infos/${id}/album_genres`;
    let urlTracks = `http://localhost:4000/album_infos/${id}/album_tracks`;

    const currentAlbum = () => {
        axios.all([
            axios.get(`${urlAlbum}`),
            axios.get(`${urlGenre}`),
            axios.get(`${urlTracks}`)
        ]) 
        .then(axios.spread((album, genres, tracks) => {
            const currentAlbum = {album, genres, tracks};
            getAlbum(currentAlbum);
            })
        )}

    useEffect(() => {
        currentAlbum();
    }, []);
    
    return(
        <div className="container" style={{
        }}>
        <div className="row" style={{
        }}>
        <GetCurrentAlbum album={album} />
        </div> 
        </div> 

    )

}