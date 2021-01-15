import { Props as Movie } from '../components/MovieCard'
import { ADD_MOVIE, DELETE_MOVIE, MyListActionTypes } from './types'

export function addMovie( newMovie: Movie ):MyListActionTypes {
    return {
        type: ADD_MOVIE,
        movie: newMovie
    }
}

export function deleteMovie( id: string ):MyListActionTypes {
    return {
        type: DELETE_MOVIE,
        movieID: id
    }
}