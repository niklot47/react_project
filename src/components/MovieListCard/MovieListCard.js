import React from 'react';

import css from './MovieListCard.module.css'
import {imgUrl} from "../../config/imgUrl";
import noimg from '../../img/noimg.png'

const MovieListCard = ({movie}) => {
    return (
        <div className={css.card}>
            <img className={css.img} src={movie.backdrop_path?imgUrl + movie.backdrop_path:noimg} alt="poster"/>
            <div className={css.title}>
                <div className={css.name}>{movie.title}</div>
                <div className={css.info}>
                    <div>{movie.release_date}</div>
                    <div>{movie.vote_average}/10</div>
                </div>
            </div>
        </div>
    );
};

export default MovieListCard;