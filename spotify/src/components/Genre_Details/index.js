import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Genre_Banner from '../Genre_Banner'
import GetCurrentGenre from '../../hooks/getCurrentGenre'

export default function Genre_Details() {
    const { id } = useParams();

    const [genre, getGenre] = useState('');

    let url = `http://localhost:4000/search_by_genre/${id}`;

    const currentGenre = () => {
        axios.get(`${url}`)
        .then((response) => {
            const currentGenre = response.data;
            getGenre(currentGenre);
        })
        .catch(error => console.error(`Error`))
    }
        

    useEffect(() => {
        currentGenre();
    }, []);

    return (
    <div>
        <Genre_Banner />
        <hr></hr>
            <div className="container" style={{}}>
            <div className="row" style={{}}>
            <GetCurrentGenre genre={genre} />
            </div>
            </div>
    </div>
    )
}