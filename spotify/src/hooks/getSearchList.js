import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function getSearchList(props) {

    const displaySearch = (props) => {
        const {search} = props;
        if (Object.keys(search).length > 0) {

            let artists = []
            let albums = []
            let album_genre = []

            if (search.artist.data.length != 0) {
                for (let i = 0; i < search.artist.data.length; i++) {
                    artists.push(<div className='col-4' key={search.artist.data[i].id}>
                        <Card style={{width: '100%', marginRight: 20, padding: 0, marginBottom: 20}}>
                            <Card.Img variant="top" src={search.artist.data[i].photo} style={{
                                height: 300,
                                width: 'auto',
                                objectFit: 'cover',
                                objectPosition: 'center top'
                            }}/>
                            <Card.Body>
                                <Card.Title>{search.artist.data[i].name}</Card.Title>
                                <Card.Text>{search.artist.data[i].description}</Card.Text>
                                <Link
                                    className="btn btn-dark btn-lg"
                                    role="button"
                                    to={`/artists/details/${search.artist.data[i].id}`}
                                >See more</Link>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            }
            if (search.genre.data.length != 0) {
                for (let i = 0; i < search.genre.data.length; i++) {
                    album_genre.push(<div className='col-4' key={search.genre.data[i].id}>
                        <Card style={{width: '100%', marginRight: 20, padding: 0, marginBottom: 20}}>
                            <Card.Img variant="top" src={search.genre.data[i].cover}/>
                            <Card.Body>
                                <Card.Title>{search.genre.data[i].album_name}</Card.Title>
                                <Card.Text>{search.genre.data[i].name}</Card.Text>
                                <Link
                                    className="btn btn-primary btn-md"
                                    role="button"
                                    to={"/albums/details/" + search.genre.data[i].id}
                                >
                                    See more
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            }
            if (search.album.data.length != 0) {
                for (let i = 0; i < search.album.data.length; i++) {
                    albums.push(<div className='col-4' key={search.album.data[i].id}>
                        <Card style={{width: '100%', marginRight: 20, padding: 0, marginBottom: 20}}>
                            <Card.Img variant="top" src={search.album.data[i].cover}/>
                            <Card.Body>
                                <Card.Title>{search.album.data[i].album_name}</Card.Title>
                                <Card.Text>{search.album.data[i].name}</Card.Text>
                                <Link
                                    className="btn btn-primary btn-md"
                                    role="button"
                                    to={"/albums/details/" + search.album.data[i].id}
                                >
                                    See more
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            }
            return (
                <div className="row">
                    {artists}
                    {albums}
                    {album_genre}
                </div>
            )
        } else {
            return (
                <h3>Loading...</h3>
            )
        }
    }
    return (
        <>
            {displaySearch(props)}
        </>
    )
}