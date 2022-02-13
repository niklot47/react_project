import React from 'react';
import ReactStars from "react-stars";
import {Link} from "react-router-dom";

import css from "../PosterTitles/PosterTitles.module.css";
import GenreBadge from "../GenreBadge/GenreBadge";

const PosterLarge = ({movieToPoster}) => {
    let movie = {...movieToPoster}
    return (
        <div className={css.info}>
            <div className={css.title}>
                <div><h2>{movie.title}</h2></div>
                <ReactStars
                    half={true}
                    value={movie.vote_average / 2}
                    count={5}
                    edit={false}
                    size={52}
                    color2={'#ffd700'}
                />
                <div><h4>{movie.vote_average}/10 ({movie.vote_count} votes)</h4></div>
                <div className={css.genres}>
                    {
                        movie.genre_ids.map(id => <GenreBadge key={id} id={id} />)
                    }
                </div>
                <Link key={movie.id} to={'/movie/' + movie.id}>
                    <button className={css.btn}><h3>Show movie</h3></button>
                </Link>
            </div>
        </div>
    );
};

export default PosterLarge;