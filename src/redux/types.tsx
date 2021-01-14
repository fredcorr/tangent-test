import { Props as Movie } from '../components/FilmCard'

export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';


export interface AddMovie {
    type: typeof ADD_MOVIE,
    movie: Movie
}

export interface DeleteMovie {
    type: typeof DELETE_MOVIE
    movieID: string
}

export interface MyListState {
	movies: Movie[]
}

export type MyListActionTypes = AddMovie | DeleteMovie;
