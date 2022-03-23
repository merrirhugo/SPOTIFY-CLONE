import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useRef} from 'react'
import ReactAudioPlayer from 'react-audio-player'

function Album_Audio(props) {

    return (
    <div>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            border: 'solid 2px rgb(203, 203, 203)'
        }} >
        <h3 style={{
            textAlign: 'left',
            marginRight: 20,
            paddingLeft: 20,
            marginTop: 5
        }}>N°{props.track_no} - {props.name}</h3>
        <ReactAudioPlayer style={{
            width: '50%',
            marginRight: '20px',
        }} 
        src={props.mp3} controls/>
        </div>
    </div>
    )
}

export default Album_Audio