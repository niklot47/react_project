import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './MovieList.module.css'
import Pages, {backToFirstPage} from "../../components/Pages/Pages";
import MovieListCard from "../../components/MovieListCard/MovieListCard";
import {scrollOutletTo} from "../../components/Layout/Layout";
import {getAllMovie, getMovieByGenreThunk, searchMovieThunk} from "../../stor";
import GenreBadge from "../../components/GenreBadge/GenreBadge";


const MovieList = () => {
    let {search, genres} = useParams();
    const [page, setPage] = useState(1);

    const {movies, pages, status, error} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    scrollOutletTo(0);

    useEffect(() => {
        if (genres !== 'null') {
            backToFirstPage('genres', setPage)
            dispatch(getMovieByGenreThunk({genres, page}))
        } else if (search === undefined || search === 'search_undefined') {
            backToFirstPage('all', setPage)
            dispatch(getAllMovie(page))
        } else {
            backToFirstPage('search', setPage)
            dispatch(searchMovieThunk({search, page}))
        }
    }, [page, search, genres])

    return (
        <div className={css.all_dark}>
            <div className={css.message}>
                {status === 'pending' && <div>Loading...</div>}
                {status === 'fulfilledSearch' && <div>Movies by search request</div>}
                {status === 'fulfilledGenre' && <div>Movies by genre</div>}
            </div>
            <Pages page={page} setPage={setPage} pages={pages}/>
            {movies.map(movie => <Link key={movie.id} to={'/movie/' + movie.id}><MovieListCard movie={movie}/></Link>)}
            <Pages page={page} setPage={setPage} pages={pages}/>
        </div>
    );
}

export default MovieList;