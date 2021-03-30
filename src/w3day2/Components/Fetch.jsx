import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Fetch() {
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        const search = async () => {
            const result = await axios.get('https://swapi.dev/api/films/1/')
            //console.log(result.data);
            setMovieData(result.data)
        }
        search();
    }, [])
    console.log(movieData);
    return (
        <div style={{textAlign:'center'}}>
            <h1>Movie: {movieData.title}</h1>
            <h1>Director: {movieData.director}</h1>

        </div>
    )
}
