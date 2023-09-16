import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    /**using usestate to choose random movie as a banner */
    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
        
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length -1)
                ]);
            return request;
        }
        fetchData();
    },[]);

    /**funtion to turncate the description */
    function turncate(str,n){
        return str?.length > n ? str?.substr(0, n-3)+'...': str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",  
                backgroundImage:`url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                {/**title */}
                <h1 className="banner_title">{/** ternary oprator is used to check if movie title doen't exist then look for name or original_name*/}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                {/**div > 2 buttons */}
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                {/**description */}
                <h1 className="banner_description">
                    {turncate(movie?.overview ,150)}
                </h1>
            </div>    

            {/** To make banner and content blend together*/}
            <div className="banner_fadebottom"/>
            
        </header>
    )
}

export default Banner;