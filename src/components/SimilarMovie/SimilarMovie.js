import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {movieService} from "../../services/movie.service";

import MovieListCard from "../MovieListCard/MovieListCard";
import css from './SimilarMovie.module.css'

const SimilarMovie = ({id}) => {

    const [similarMovie, setSimilarMovie] = useState([]);

    useEffect(() => {
        movieService.getSimilarMovie(id).then(value => {
            setSimilarMovie(value.results.slice(0, 8));
            console.log(value);
        });
    }, [id])


    return (
        <div className={css.all}>
            <h3>Similar movie:</h3>
            <div className={css.movie}>
                {!similarMovie || similarMovie.map(simMovie => <Link key={simMovie.id} to={'/movie/'+simMovie.id}><MovieListCard movie={simMovie}/></Link>)}
            </div>
        </div>
    );
};

export default SimilarMovie;