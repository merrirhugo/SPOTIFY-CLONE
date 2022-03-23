import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Artist_Banner from '../Artist_Banner'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GetCurrentArtist from '../../hooks/getCurrentArtist';
import axios from "axios";


export default function Artist_Details() {
    const { id } = useParams();

    const [artist, getArtist] = useState('');

    let url = `http://localhost:4000/artist_infos/${id}`;
    let urlAlbums = `http://localhost:4000/artist_albums/${id}`;

    const currentArtist = () => {
        axios.all([
            axios.get(`${url}`),
            axios.get(`${urlAlbums}`),
        ]) 
        .then(axios.spread((artist, albums) => {
            const currentArtist = {artist, albums};
            getArtist(currentArtist);
            })
        )}

    useEffect(() => {
        currentArtist();
    }, []);

    return(
        <div className="container" style={{
        }}>
            <div className="row" style={{
            }}>
                <GetCurrentArtist artist={artist} />
            </div>
        </div>
    )
}