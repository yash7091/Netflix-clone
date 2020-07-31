import React, { useState, useEffect } from 'react'
import axios from 'axios'
import requests from './request'
import './Banner.css'
function Banner() {
    const [movie,setMovies] = useState([]);
       
    useEffect(() => {
            
            const fetchData =() => {
               return fetch("https://api.themoviedb.org/3/discover/tv?api_key=739f18bcb1eb0668d608183159336b45&with_networks=213")
               .then(res => res.json()) 
               .then(data => {
                    console.log(data)
                 setMovies(data.results[Math.floor(Math.random() * 19)]);

                })
                .catch(error => console.log(error))
            }
            fetchData();
          }, []);
      
    console.log(movie)
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." :str;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(
            https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition:"center center",
        }}>
            <div className="banner__contents">
            <h1 className="banner__title">
                {movie?.title|| movie?.name||movie?.original_name}
            </h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div >
           
        <h1 className="banner__description">{movie?.overview}
        {
            truncate(movie?.overview,150)
        }
        </h1>
        
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
