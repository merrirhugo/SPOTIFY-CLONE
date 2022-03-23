import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import React from 'react'
import Album_Banner from '../components/Album_Banner'
import Album_Audio from '../components/Album_Audio'

export default function getCurrentAlbum(props) {

    const displayAlbum = (props) => {
        const {album} = props;

            if(Object.keys(album).length > 0) {

                let tracks = [];

                for (let i = 0; i < album.tracks.data.length; i++) {
                    tracks.push(<div key={album.tracks.data[i].track_no}><Album_Audio track_no={album.tracks.data[i].track_no} name={album.tracks.data[i].name} mp3={album.tracks.data[i].mp3}/></div>)
                } 
                
                    return (
                        <div>
                        <Album_Banner cover={album.album.data[0].cover} album={album.album.data[0].name} year={album.album.data[0].release_date} popularity={album.album.data[0].popularity} artist={album.album.data[0].artist} genre={album.genres.data} description={album.album.data[0].description} />
                        <hr></hr>
                        <h1 style={{
                            textAlign: 'left'
                        }}>Album Tracks</h1>
                        {tracks}
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
            {displayAlbum(props)}
        </>
    )
}