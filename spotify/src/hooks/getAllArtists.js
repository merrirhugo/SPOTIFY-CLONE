import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function getAllArtists(props) {

    const displayArtists = (props) => {
        const {artists} = props;

        if(Object.keys(artists).length > 0) {
            return (
                artists.results_artists.map((data) => {
                    return (
                        <div className='col-4' key={data.id}>
                            <Card style={{ width: '100%', marginRight: 20, padding: 0, marginBottom: 20 }}>
                                <Card.Img variant="top" src={data.photo} style={{ height: 300, width: 'auto', objectFit: 'cover', objectPosition: 'center top'}}/>
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>{data.description}</Card.Text>
                                    <Link
                                        className="btn btn-dark btn-lg"
                                        role="button"
                                        to={`/artists/details/${data.id}`}
                                    >See more</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })
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
            {displayArtists(props)}
        </>
    )
}