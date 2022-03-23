import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import GetAllGenres from '../../hooks/getAllGenres';

export default function Genres() {
    const [genres, getGenres] = useState('');
    const url = 'http://localhost:4000/genres';

    const allGenres = () => {
        axios.get(`${url}`)
            .then((response) => {
                const allGenres = response.data;
                getGenres(allGenres);
            })
            .catch(error => console.error(`Error`))
    }

    useEffect(() => {
        allGenres();
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
                }>Genres</h1>

                <GetAllGenres genres={genres} />
            </div>
        </div>
    )
}