import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    // snipet of code which runs based on a specific condition/variable

    useEffect(() => {
        //if [](epmty), run once when the row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //kinda doing "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}$with_networks=213"

            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    //fetchUrl is dependancy you are using from outside so you have to pass t here

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            //documentaion to refer youtube player
            // https://developers.google.com/youtube/player_parameters            
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl(''); /**If the trailer video is playing you are clearing it up by this funtcion */
        }else {
            movieTrailer(movie?.name || "")         /**This finds movie trailer by name on youtuobe */
            .then((url) => {                     
                     /**to get only video id {link_address ......?v=D8ThZ75zQWc} of video not the whole address */
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }

    };

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className="row_posters">

                {/** container for posters */}

                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow  && "row_posterLarge" }`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}
            </div>
            {trailerUrl && < YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    );
}

export default Row;