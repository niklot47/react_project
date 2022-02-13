import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../services/genre.service";


export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async () => {
        try {
            const genres = await genreService.getAllGenres()
            return genres.genres
        } catch (e) {
            console.log(e);
        }
    }
)

const genreSlice = createSlice(
    {
        name: 'genreSlice',
        initialState:{
            genres: [],
            status: null,
            error: null
        },
        reducers:{

        },
        extraReducers:{
            [getAllGenres.pending]: (state, action) => {
                state.status = 'pending';
                state.error = null;
            },
            [getAllGenres.fulfilled]: (state, action) => {
                state.status = 'pending'
                state.genres = action.payload
                console.log(action.payload);
                sessionStorage.setItem('genres', JSON.stringify(action.payload));
            },
            [getAllGenres.rejected]: (state, action) => {
                state.status = 'pending'
            },
        }
    }
);

const genreReducer = genreSlice.reducer;
export default genreReducer;