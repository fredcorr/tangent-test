import { Props as Movie } from '../../components/MovieCard';
import { useSelector } from 'react-redux';
import MovieList from '../../components/MoviesList';
import { motion } from 'framer-motion';
import React from 'react';

const FavouriteList: React.FC = () => {

    const moviesStored = useSelector<Movie>( (state) => state.movies );

    return (
       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> 
        <MovieList 
            movies={ moviesStored }
            title={ 'This is your favourite list' }
            isStatic={ true }
        />
        </motion.div>
    )
}

export default FavouriteList;