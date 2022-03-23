import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function getAllGenres(props) {

    const displayGenres = (props) => {
        const {genres} = props;
        if(Object.keys(genres).length > 0) {
            return (
                genres.results_genres.map((data) => {
                    return (
                        <div className='col-4' key={data.id}>
                            <Card style={{ width: '100%', marginRight: 20, padding: 0, marginBottom: 20 }}>
                                <Card.Body>
                                    <Card.Title style={{
                                        fontSize: 30
                                    }}>{data.name}</Card.Title>
                                    <Link 
                                className="btn btn-primary btn-md"
                                role="button"
                                to={`/genres/details/${data.id}`}
                                > 
                                See more
                                </Link>

                                </Card.Body>
                            </Card>
                        </div>
                    );
                })
            );
        }

        else {
            return (
                <h3>Loading ...</h3>
            )
        }
    }
    return(
        <>
            {displayGenres(props)}
        </>
    )
}