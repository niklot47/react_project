import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {movieService} from "../services/movie.service";

export const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async (page) => {
        try {
            const movies = await movieService.discover(page)
            // console.log(movies);
            return movies
        } catch (e) {
            console.log(e);
        }
    }
)

export const topRatedMoviesThunk = createAsyncThunk(
    'movieSlice/getAllMovie',
    async (page) => {
        try {
            const movies = await movieService.topRatedMovies()
            return movies
        } catch (e) {
            console.log(e);
        }
    }
)

export const searchMovieThunk = createAsyncThunk(
    'movieSlice/searchMovieThunk',
    async ({search, page}) => {
        try {
            const movies = await movieService.searchMovie(search, page)
            return movies
        } catch (e) {
            console.log(e);
        }
    }
)

export const getMovieByGenreThunk = createAsyncThunk(
    'movieSlice/getAllMovie',
    async (genres, page) => {
        try {
            const movies = await movieService.getMovieByGenres(genres, page)
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
        },
        extraReducers: {
            [getAllMovie.pending]: (state, action) => {
                state.status = 'pending';
                state.error = null;
            },
            [getAllMovie.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.pages = action.payload.total_pages>500?500:action.payload.total_pages
                state.movies = action.payload.results
            },
            [getAllMovie.rejected]: (state, action) => {
                state.status = 'rejected'
            },

            //=====================================================

            [searchMovieThunk.pending]: (state, action) => {
                state.status = 'pending';
                state.error = null;
            },
            [searchMovieThunk.fulfilled]: (state, action) => {
                state.status = 'fulfilled';
                state.pages = action.payload.total_pages>500?500:action.payload.total_pages
                state.movies = action.payload.results;
            },
            [searchMovieThunk.rejected]: (state, action) => {
                state.status = 'rejected';
            },

            //=====================================================

            [getMovieByGenreThunk.pending]: (state, action) => {
                state.status = 'pending';
                state.error = null;
            },
            [getMovieByGenreThunk.fulfilled]: (state, action) => {
                state.status = 'fulfilled';
                state.pages = action.payload.total_pages>500?500:action.payload.total_pages
                state.movies = action.payload.results;
            },
            [getMovieByGenreThunk.rejected]: (state, action) => {
                state.status = 'rejected';
            },

            //=====================================================

            [topRatedMoviesThunk.pending]: (state, action) => {
                state.status = 'pending';
                state.error = null;
            },
            [topRatedMoviesThunk.fulfilled]: (state, action) => {
                state.status = 'fulfilled';
                state.pages = action.payload.total_pages>500?500:action.payload.total_pages
                state.movies = action.payload.results;
            },
            [topRatedMoviesThunk.rejected]: (state, action) => {
                state.status = 'rejected';
            }
        }
    }
)

const movieReducer = movieSlice.reducer;
export const {} = movieSlice.actions;
export default movieReducer;