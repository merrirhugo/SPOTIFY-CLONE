import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import cover from '../../assets/cover.jpg'
import { Image } from 'react-bootstrap'

function Album_Banner(props) {
    var genre = '';
    for (let i = 0; i < props.genre.length; i++) {
        genre += ' ' + props.genre[i].name;
    }

    var date = new Date(0); 
    date.setUTCSeconds(props.year);
    var year = date.getFullYear()

    return (
    <div className='col' style={{
        display: "flex",
        flexDirection: "row"
    }}>
        <Image style={{
            marginLeft: 50,
            width: 'auto',
            height: 300,
        }} src={props.cover} alt="pp"/>
        <div style={{
            display: 'inline-block',
            marginLeft: 75
        }}>
        <h1 style={{
            textAlign: 'left',
        }}>{props.album} - {year}</h1>
        <h2 style={{
            textAlign: 'left',
            fontStyle: "italic" 
        }}>{props.artist}</h2>
        <h5 style={{
            textAlign: 'left',
            color: 'black'
        }}>Popularity : {props.popularity}</h5>
        <h3 style={{
            textAlign: 'left',
            color: 'darkgray'
        }}>{genre}</h3>
        <p style={{
            display:'inline-block',
            fontSize: 20,
            width: `100%`,
            height: '105px',
            textAlign: 'left',
            marginTop: 20,
            overflow: 'auto',
        }}>{props.description}</p>
    </div>
    </div> 
    )
}

export default Album_Banner