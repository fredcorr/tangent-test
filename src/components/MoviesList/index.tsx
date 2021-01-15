import FilmCard, { Props as Movie } from '../../components/MovieCard';
import Loader from '../Loader'
import React from 'react';

interface Props {
    movies: Array<Movie>,
    title: string,
    isStatic: boolean
}

const MovieList: React.FC<Props> = ( { title, movies, isStatic } ) => {
    
    return (
        movies.length !== 0 ?
        <>
            <h1 className='heading'>{ title }</h1>
            <div className="moviesList">
               {
                    movies.map( movie => <FilmCard
                    key={ movie.imdbId }
                    title={ movie.title }
                    imdbId={ movie.imdbId }
                    poster={ movie.poster }
                    year={ movie.year }
                    type={ movie.type }
                    />
                 )
               }
            </div>
        </> : isStatic ? <p>Please add some movies to the list</p> : <Loader />
    )
}

export default MovieList;