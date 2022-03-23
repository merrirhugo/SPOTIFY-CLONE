import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {Image} from 'react-bootstrap'
import {Link} from "react-router-dom";

function Artist_Banner(props) {
    return (
        <div className='row'>

            <div className='col' style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <Image style={{
                    marginLeft: 50,
                    width: 300,
                    height: 300,
                    objectFit: 'cover',
                    objectPosition: "center-top",
                }} src={props.photo} alt="Artist picture" roundedCircle/>
                <div style={{
                    display: 'inline-block',
                    marginLeft: 75,
                }}>
                    <h1 style={{
                        textAlign: 'left',
                        fontStyle: "italic"
                    }}>{props.name}</h1>
                    <h3 style={{
                        display:'inline-block',
                        fontSize: 20,
                        width: `100%`,
                        height: '50px',
                        textAlign: 'left',
                        marginTop: 20,
                        overflow: 'auto',
                    }}>{props.description}</h3>
                    <p style={{
                        display:'inline-block',
                        fontSize: 20,
                        width: `100%`,
                        height: '135px',
                        textAlign: 'left',
                        overflow: 'auto',
                    }}>{props.bio}</p>
                </div>
            </div>
        </div>

    )
}

export default Artist_Banner