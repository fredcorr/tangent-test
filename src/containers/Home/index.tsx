import { Props as Movie } from '../../components/MovieCard';
import React, { useRef, useState, useEffect } from 'react';
import MovieList from '../../components/MoviesList';
import { motion } from 'framer-motion';
import { BsSearch } from 'react-icons/bs';
import { gql } from '@apollo/client';
import client from '../../apollo';

const Home: React.FC = () => {

    const searchInput = useRef<HTMLInputElement>(null);
    const [ fetchedMovies, setFetchedMovies ] =  useState<Array<Movie>>([]);
    const [ myMovies, setmyMovies ] =  useState<Array<Movie>>([]);

    useEffect(() => {

      const favouriteMovies = [ 'tt0109830', 'tt0113277', 'tt0758758', 'tt0113540', 'tt0113497', 'tt0086250', 'tt0993846', 'tt1596363', 'tt0120586' ];

      const query = favouriteMovies.map( movie => `
              ${ movie } : movie( id: "${ movie }" ) {
                title,
                year,
                imdbId,
                poster,
                type
              }` ).join('')
      
      
      client.query({
        query: gql`
        query { ${ query } }`
      }).then( result => setmyMovies(Object.keys(result.data).map((key) => [result.data[key]][0]))
      )

    }, [])
    
    console.log( fetchedMovies );
    

    const fetchMovies = () => client.query({
      query: gql`
      query {
        search( searchTerm: "${ searchInput.current?.value }" ) {
          movies {
            title,
            year,
            imdbId,
            poster,
            type
          }
        }
      }`
    }).then( result => result.data.search.movies !== null ? setFetchedMovies( result.data.search.movies ) : null )

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="searchBar">
            <input
                placeholder='Search your favourite film'
                defaultValue=''
                ref={ searchInput }
                type='text'
                onChange={ fetchMovies }
            />
            <button onClick={ fetchMovies }>Search <BsSearch/></button>
          </div>
          {
            fetchedMovies.length !== 0 ? <MovieList 
              movies={ fetchedMovies } 
              title={'Your search results'}
              isStatic={ false }
            /> : null
          }
    
          <MovieList
            movies={ myMovies }
            title={'My top 9 movies'}
            isStatic={ false }
            />
        </motion.div>
    )
}

export default Home;