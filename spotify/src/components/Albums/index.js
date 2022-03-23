import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import GetAllAlbums from '../../hooks/getAllAlbums';

export default function Albums() {
    const [albums, getAlbums] = useState('');

    const url = 'http://localhost:4000/albums';

    const allAlbums = () => {
        axios.get(`${url}`)
        .then((response) => {
            const allAlbums = response.data;
            getAlbums(allAlbums);
        })
        .catch(error => console.error(`Error`))
    }

    useEffect(() => {
        allAlbums();
    }, []);
    
    return(
        <div className="container" style={{
        }}>
        <div className="row" style={{
        }}>
            <h1 style={
        {
            fontSize: 70,
            textAlign: 'left',
            paddingBottom: 20
        }
    }>Albums</h1>

        <GetAllAlbums albums={albums} />
        </div> 
        </div> 
    )

}