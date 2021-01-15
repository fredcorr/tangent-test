import React, { useEffect, useState } from 'react';
import { BiCalendarWeek, BiTime, BiShieldX } from 'react-icons/bi';
import Loader from '../../components/Loader';
import { motion } from 'framer-motion';
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
        <motion.div className="Movie" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {
                movieData !== undefined ? 
                <>
                 <motion.div className="poster" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <img src={ movieData.poster } alt={ `${ movieData.title } ${ movieData.year }` } />
                </motion.div>
                <motion.div className="movieDetails" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h1>{ movieData.title }</h1>
                    <p>{ movieData.plot }</p>
                    <span className="icons">
                        <BiCalendarWeek/>
                        { movieData.year }
                    </span>
                    <span className="icons">
                        <BiTime/>
                        { movieData.runtime }
                    </span>
                    <span className="icons">
                        <BiShieldX/>
                        { movieData.rated }
                    </span> 
                    <span className="genre">{ movieData.genre }</span>
            </motion.div> 
            </> : <Loader />
            } 
            
        </motion.div>
    )
}

export default Movie;