import { Props as Movie } from '../../components/MovieCard';
import { useSelector } from 'react-redux';
import MovieList from '../../components/MoviesList'
import React from 'react';

const FavouriteList: React.FC = () => {

    const moviesStored = useSelector<Movie>( (state) => state.movies );

    return <MovieList 
        movies={ moviesStored }
        message={ 'Please add some movies to the list' }
        title={ 'This is your favourite list' }/>
}

export default FavouriteList;