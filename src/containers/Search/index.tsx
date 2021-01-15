import FilmCard, { Props as Movie } from '../../components/MovieCard';
import { BsSearch } from 'react-icons/bs';
import React, { useRef, useState } from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo';

const Search: React.FC = () => {

    const searchInput = useRef<HTMLInputElement>(null);
    const [ fetchedMovies, setFetchedMovies ] =  useState<Array<Movie>>([]);

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
    }).then( result => setFetchedMovies( result.data.search.movies ))

    return (
        <>
          <div className="searchBar">
            <input
                placeholder='Search your favourite film'
                defaultValue=''
                ref={ searchInput }
                type='text'
                onChange={ (e: any) => fetchMovies() }
            />
            <button onClick={ (e) => fetchMovies() }>Search <BsSearch/></button>
          </div>
          <h1>My Top 9 Films</h1>
          <div className="moviesList">
            {
              fetchedMovies !== null ? fetchedMovies.map( 
                ( movie: Movie ) => <FilmCard
                  key={ movie.imdbId }
                  title={ movie.title }
                  imdbId={ movie.imdbId }
                  poster={ movie.poster }
                  year={ movie.year }
                  type={ movie.type }
                /> 
               ) : false
            } 
          </div>

        </>
    )
}

export default Search;