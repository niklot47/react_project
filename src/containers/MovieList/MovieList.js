import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './MovieList.module.css'
import {getAllMovie} from "../../stor";import MovieListCard from "../../components/MovieListCard/MovieListCard";
import Pages from "../../components/Pages/Pages";

const MovieList = () => {

    const [page, setPage] = useState(1);

    const {movies, pages, status, error} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovie(page))
    }, [page])

    return (
        <div className={css.all_dark}>
            <Pages page={page} setPage={setPage} pages={pages}/>
            {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            <Pages page={page} setPage={setPage} pages={pages}/>
        </div>
    );
}

export default MovieList;