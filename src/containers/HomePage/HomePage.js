import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './HomePage.module.css'
import MovieListCard from "../../components/MovieListCard/MovieListCard";
import Poster from "../../components/Poster/Poster";
import {movieService} from "../../services/movie.service";
import {getAllMovie} from "../../stor";

const HomePage = () => {

    const [top, setTop] = useState([]);
    useEffect(() => {
        movieService.topRatedMovies().then(value => setTop(value.results))
    }, [])

    const {movies} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        let page = 1;
        dispatch(getAllMovie(page))
    }, [])

    return (
        <div className={css.all}>
            <div>
                <div className={css.poster}>
                    {
                        <Poster topMovie={movies.slice(0,4)}/>
                    }
                </div>

                <h2>Best movies:</h2>
                <div className={css.wrap}>
                    {
                        top.slice(0,8).map(movie => <Link key={movie.id} to={'/movie/' + movie.id}><MovieListCard
                            movie={movie}/></Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;