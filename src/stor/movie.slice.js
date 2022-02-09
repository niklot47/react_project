import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice(
    {
        name: 'movieSlice',
        initialState: {
            movies: []
        },
        reducers:{
            addMovies: (state, action) => {
                state.movies.push()

            }
        }
    }
)

const movieReducer = movieSlice.reducer;
export const {addMovies} = movieSlice.actions;
export default movieReducer;