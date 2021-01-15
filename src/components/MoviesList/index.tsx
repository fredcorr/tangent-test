import FilmCard, { Props as Movie } from '../../components/MovieCard';
import React from 'react';

interface Props {
    movies: Array<Movie>,
    title: string,
    message: string
}

const MovieList: React.FC<Props> = ( props ) => {
    
    return (
        props.movies !== null && props.movies.length !== 0 ?
        <>
            <h1 className='heading'>{ props.title }</h1>
            <div className="moviesList">
               {
                    props.movies.map( movie => <FilmCard
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
        </> : <p>{ props.message }</p>
    )
}

export default MovieList;