import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import GetAllArtists from '../../hooks/getAllArtists';

export default function Artists() {
    const [artists, getArtists] = useState('');
    const url = 'http://localhost:4000/artists';

    const allArtists = () => {
        axios.get(`${url}`)
            .then((response) => {
                const allArtists = response.data;
                getArtists(allArtists);
            })
            .catch(error => console.error(`Error`))
    }

    useEffect(() => {
        allArtists();
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
                }>Artists</h1>

                <GetAllArtists artists={artists} />
            </div>
        </div>
    )
}