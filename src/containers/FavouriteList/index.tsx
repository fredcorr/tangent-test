import FilmCard, { Props as Movie } from '../../components/FilmCard';
import { useSelector } from 'react-redux';
import React from 'react';

const FavouriteList: React.FC = () => {

    const movies = useSelector<Movie>( (state) => state.movies );

    return (
        <div className='filmList'>
            {
                movies.map( movie => <FilmCard
                    key={ movie.id }
                    plot={ movie.plot }
                    title={ movie.title }
                    id={ movie.id }
                    genre={ movie.genre }
                    details={ movie.details }
                    img={{
                    alt: movie.img.alt,
                    src: movie.img.src
                    }}
                /> )
            }
        </div>
    )
}

export default FavouriteList;