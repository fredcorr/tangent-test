import { MyListState, MyListActionTypes, ADD_MOVIE, DELETE_MOVIE } from './types'

const initialState: MyListState = {
	movies: []
}

export function MyListReducer(
	state = initialState,
	action: MyListActionTypes
) : MyListState {

	switch (action.type) {
		case ADD_MOVIE:
				return {
					movies: [ ...state.movies, action.movie ]
				}
		case DELETE_MOVIE:
				return {
					movies: state.movies.filter(
						movie => movie.id !== action.movieID
					  )
				}
		default:
			return state
	}

}