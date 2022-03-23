import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Genre_Banner(props) {
    return (
    <div className='col' style={{
        display: "flex",
        flexDirection: "row"
    }}>
        <div style={{
            display: 'inline-block',
            marginLeft: 75
        }}>
        <h1 style={{
            textAlign: 'left',
            fontSize: 50
        }}>{props.genre_name}</h1>
    </div>
    </div> 
    )
}

export default Genre_Banner