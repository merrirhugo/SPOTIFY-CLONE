import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GetSearchList from '../../hooks/getSearchList';


export default function SearchPage() {
    const { value } = useParams();

    const [search, getSearch] = useState('');

    const urlGenre = `http://localhost:4000/search_by_genre/${value}`;

    const currentSearch = () => {
        axios.all([
            axios.get(`${urlGenre}`),
            axios.get(`http://localhost:4000/search_album/${value}`),
            axios.get(`http://localhost:4000/search_artist/${value}`)
        ]) 
        .then(axios.spread((genre, album, artist) => {
            const results = {genre, album, artist};
            getSearch(results);
            })
        )}

    useEffect(() => {
        currentSearch();
    }, []);
    
    return(
        <div className="container" style={{}}>
            <GetSearchList search={search} />
        </div> 
    )
}