import React from 'react';
import './App.css';
import Navbar from '../../components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Genres from '../../components/Genres';
import Artists from '../../components/Artists';
import Albums from '../../components/Albums';
import Home from '../../components/Home';
import Artist_Details from '../../components/Artist_Details';
import Album_Details from '../../components/Album_Details';
import Genre_Details from '../../components/Genre_Details';
import SearchPage from '../../components/SearchPage';
import onFormSubmit from '../../components/Search'

function App() {

  return(
    <div className="App">
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/albums" element={<Albums />} />
    <Route exact path="/genres" element={<Genres />} />
    <Route exact path="/artists" element={<Artists />} />
    <Route exact path="/artists/details/:id" element={<Artist_Details />} />
    <Route exact path="/albums/details/:id" element={<Album_Details />} />
    <Route exact path="/genres/details/:id" element={<Genre_Details />} />
    <Route exact path="/search" element={<onFormSubmit />} />
    <Route exact path="/search/:value" element={<SearchPage />} />
    </Routes>
    </div>
  )
}

export default App;