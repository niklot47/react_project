import React, {useEffect, useState} from 'react';

import css from './MainPage.module.css'
import {movieService} from "../../services/movie.service";

const MainPage = () => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        movieService.discover(1).then(value => {
            setMovies(value);
            console.log(movies);
        })
    }, [])

    return (
        <div className={css.all_dark}>
            MainPage
        </div>
    );
};

export default MainPage;