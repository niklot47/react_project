import React, {useEffect, useState} from 'react';
import {Link,  useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './MovieList.module.css'
import Pages from "../../components/Pages/Pages";
import MovieListCard from "../../components/MovieListCard/MovieListCard";
import {getAllMovie, getMovieByGenreThunk, searchMovieThunk} from "../../stor";

const MovieList = () => {
    let {search, genres} = useParams();
    const [page, setPage] = useState(1);

    const {movies, pages} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        if (genres !== 'null'){
            dispatch(getMovieByGenreThunk({genres, page}))
        }else if (search === undefined || search === 'search_undefined') {
            dispatch(getAllMovie(page))
        }else{
            dispatch(searchMovieThunk({search, page}))
        }
    }, [page, search, genres])

    return (
        <div className={css.all_dark}>
            <Pages page={page} setPage={setPage} pages={pages}/>
            {movies.map(movie => <Link key={movie.id} to={'/movie/' + movie.id}><MovieListCard movie={movie}/></Link>)}
            <Pages page={page} setPage={setPage} pages={pages}/>
        </div>
    );
}

export default MovieList;