import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import React from 'react'
import Artist_Banner from '../components/Artist_Banner'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function getCurrentArtist(props) {

    const displayArtist = (props) => {
        const {artist} = props;


        if(Object.keys(artist).length > 0) {

            let albums = [];

            for (let i = 0; i < artist.albums.data.length; i++) {
                albums.push(<div className='col-4' key={artist.albums.data[i].album_id}>
                            <Card style={{ width: '100%', marginRight: 20, padding: 0, marginBottom: 20 }}>
                            <Card.Img variant="top" src={artist.albums.data[i].cover} />
                        <Card.Body>
                            <Card.Title>{artist.albums.data[i].album_name}</Card.Title>
                            <Card.Text>{artist.albums.data[i].name}</Card.Text>
                            <Link 
                            className="btn btn-primary btn-md"
                            role="button"
                            to={`/albums/details/${artist.albums.data[i].album_id}`}
                            > 
                            See more
                            </Link>
                        </Card.Body>
                        </Card> 
                    </div>)
            } 

            return (
                <div>
                <Artist_Banner artist_id={artist.artist.data[0].id} photo={artist.artist.data[0].photo} name={artist.artist.data[0].name} bio={artist.artist.data[0].bio} description={artist.artist.data[0].description} />
                <hr></hr>
                <h1 style={{
                            textAlign: 'left'
                        }}>Albums</h1>
                <div className="container" style={{}}>
                <div className="row" style={{}}>
                {albums}
                </div>
                </div>
                </div>
            );
        }

        else {
            return (
                <h3>Loading...</h3>
            )
        }
    }
    return(
        <>
            {displayArtist(props)}
        </>
    )
}