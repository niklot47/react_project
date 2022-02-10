import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {movieService} from "../services/movie.service";

export const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async (page) => {
        try {
            const movies = await movieService.discover(page)
            console.log(movies);
            return movies
        } catch (e) {
            console.log(e);
        }
    }
)


const movieSlice = createSlice(
    {
        name: 'movieSlice',
        initialState: {
            movies: [],
            pages: 0,
            status: null,
            error: null
        },
        reducers: {
            addMovies: (state, action) => {
                state.movies = [...action.payload]

            }
        },
        extraReducers: {
            [getAllMovie.pending]: (state, action) => {
                state.status = 'pending';
                state.error = null;
            },
            [getAllMovie.fulfilled]: (state, action) => {
                state.status = 'pending'
                // state.pages = action.payload.total_pages
                state.pages = 500
                state.movies = action.payload.results
                console.log('state.movies: ', state.movies);
            },
            [getAllMovie.rejected]: (state, action) => {
                state.status = 'pending'
            }
        }
    }
)

const movieReducer = movieSlice.reducer;
export const {addMovies} = movieSlice.actions;
export default movieReducer;