import React, {useEffect, useState} from 'react';
import {movieService} from "../../services/movie.service";
import css from "../SimilarMovie/SimilarMovie.module.css";
import {Link} from "react-router-dom";
import MovieListCard from "../MovieListCard/MovieListCard";

const SameGenres = ({genres}) => {
    const [similarMovie, setSimilarMovie] = useState([]);

    let genresString = '';

    for (const genre of genres) {
        if (genresString === '') {
            genresString = '' + genre.id
        } else {
            genresString = genresString + ',' + genre.id
        }
    }

    useEffect(() => {
        let page =1;
        movieService.getMovieByGenres({genres: genresString, page}).then(value => {
            setSimilarMovie(value.results.slice(0, 8));
            // console.log(value);
        });
    }, [genres])


    return (
        <div className={css.all}>
            <h3>Same genres:</h3>
            <div className={css.movie}>
                {
                    !similarMovie || similarMovie.map(
                        simMovie => <Link key={simMovie.id} to={'/movie/' + simMovie.id}><MovieListCard movie={simMovie}/></Link>
                    )
                }
            </div>
        </div>
    );
};

export default SameGenres;