import React from 'react';
import ReactStars from "react-stars/dist/react-stars";

import css from './MovieListCard.module.css'
import img_placeholder from '../../img/img_placeholder.png'
import {imgUrl} from "../../config/imgUrl";

const MovieListCard = ({movie}) => {
    return (
        <div className={css.card}>
            <img className={css.img}
                 src={movie.backdrop_path ? imgUrl.backdrop_sizes.w780 + movie.backdrop_path : img_placeholder} alt="poster"/>
            <div className={css.title}>
                <div className={css.name}>{movie.title}</div>
                <div className={css.info}>
                    <div>{movie.release_date}</div>
                    <div>{movie.vote_average}/10</div>
                </div>
            </div>
            <div className={css.rt}>
                <ReactStars
                    value={movie.vote_average/2}
                    count={5}
                    edit={false}
                    size={24}
                    color2={'#ffd700'}
                    half={true}
                />
            </div>
        </div>
    );
};

export default MovieListCard;