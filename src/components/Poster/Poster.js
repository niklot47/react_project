import React, {useEffect, useState} from 'react';
import ReactStars from "react-stars";

import css from "./Poster.module.css";
import {imgUrl} from "../../config/imgUrl";
import noimg from "../../img/noimg.png";
import {Link} from "react-router-dom";
import MovieListCard from "../MovieListCard/MovieListCard";

const Poster = ({movie}) => {

    if (movie) return (
        <div className={css.all}>
            <img className={css.poster}
                 src={movie.poster_path !== undefined ? imgUrl.backdrop_sizes.original + movie.poster_path : noimg}
                 alt="poster"/>
            <div className={css.content}>
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
                        <Link key={movie.id} to={'/movie/' + movie.id}>
                            <button className={css.btn}><h3>Show movie</h3></button>
                        </Link>
                    </div>
                </div>
            {/*<div className={css.topMovie}>*/}
            {/*    {movies.map(movie => <a key={movie.id} href='#' onClick={()=>{}}><MovieListCard movie={movie}/></a>)}*/}
            {/*</div>*/}
            </div>
        </div>
    );
};

export default Poster;