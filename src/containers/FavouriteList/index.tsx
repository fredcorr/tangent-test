import FilmCard, { Props as Movie } from '../../components/MovieCard';
import { useSelector } from 'react-redux';
import React from 'react';

const FavouriteList: React.FC = () => {

    const movies = useSelector<Movie>( (state) => state.movies );

    return (
        <div className="moviesList">
            {
                movies.map( movie => <FilmCard
                    key={ movie.id }
                    title={ movie.title }
                    imdbId={ movie.id }
                    poster={ movie.img }
                    year={ movie.year }
                    type={ movie.type }
                /> )
            }
        </div>
    )
}

export default FavouriteList;