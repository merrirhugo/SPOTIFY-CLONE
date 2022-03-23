import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import Get6Albums from '../../hooks/get6Albums';

export default function Home() {
            const [albums, get6Albums] = useState('');
        
            const url = 'http://localhost:4000/6albums';
        
            const All6Albums = () => {
                axios.get(`${url}`)
                .then((response) => {
                    const All6Albums = response.data;
                    get6Albums(All6Albums);
                })
                .catch(error => console.error(`Error`))
            }
        
            useEffect(() => {
                All6Albums();
            }, []);
            
            return(
                <div className="container" style={{
                }}>
                <div className="row" style={{
                }}>
                <h1 style={
                    {
                        fontSize: 70,
                        textAlign: 'left',
                        paddingBottom: 20
                    }
                }>For you</h1>
                <Get6Albums albums={albums} />
                </div> 
                </div> 
            )
        
        }