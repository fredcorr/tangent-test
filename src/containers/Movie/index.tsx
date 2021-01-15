import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gql } from '@apollo/client';
import client from '../../apollo';

interface singleMovie {
    plot: string,
    title: string,
    genre: string,
    runtime: string,
    poster: string,
    rated: string,
    year: string
}   

const Movie: React.FC = ( ) => {

    const [ movieData, setMovieData ] =  useState<singleMovie>();
    const { slug } = useParams()

    useEffect( () => {
        client.query({
            query: gql`
            query {
                movie(id:"${ slug.substring(1) }") {
                    plot,
                    title,
                    genre,
                    runtime,
                    poster,
                    rated
                    year
                  }
            }`
          }).then( result => setMovieData( result.data.movie ))
        
    }, [slug])

    return (
        <div className="Movie">
            {
                movieData !== undefined ? 
                <>
                 <div className="poster">
                    <img src={ movieData.poster } alt={ `${ movieData.title } ${ movieData.year }` } />
                </div>
                <div className="movieDetails">
                    <h1>{ movieData.title }</h1>
                    <p>{ movieData.plot }</p>
                    <div>
                        
                    </div>
                    <span className="genre">{ movieData.genre }</span>
            </div> 
            </> : false
            } 
            
        </div>
    )
}

export default Movie;