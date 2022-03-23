import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function get6Albums(props) {

    const display6Albums = (props) => {
        const {albums} = props;
        if (Object.keys(albums).length > 0) {
            return (
                albums.results6albums.map((data) => {
                    return (
                        <div className='col-4' key={data.id}>
                            <Card style={{width: '100%', marginRight: 20, padding: 0, marginBottom: 20}}>
                                <Card.Img variant="top" src={data.cover}/>
                                <Card.Body>
                                    <Card.Title>{data.album_name}</Card.Title>
                                    <Card.Text>{data.name}</Card.Text>
                                    <Link
                                        className="btn btn-primary btn-md"
                                        role="button"
                                        to={`/albums/details/${data.id}`}
                                    >
                                        See more
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })
            );
        } else {
            return (
                <h3>Loading...</h3>
            )
        }
    }
    return (
        <>
            {display6Albums(props)}
        </>
    )
}