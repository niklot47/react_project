import React from "react";
import {Link, useNavigate} from "react-router-dom";

import css from "./PosterTitles.module.css";
import {imgUrl} from "../../config/imgUrl";
import img_placeholder from "../../img/img_placeholder.png";
import MovieListCard from "../MovieListCard/MovieListCard";
import PosterLarge from "../PosterLarge/PosterLarge";
import {setBgImg} from "../../config/palette/colors";

const PosterTitles = ({topMovie}) => {
    let movie = {...topMovie[0]}
    const navigate = useNavigate();
    setBgImg(imgUrl.backdrop_sizes.original + movie.poster_path);

    return (
        <div className={css.all}>
            <img className={css.poster}
                 src={movie.poster_path !== undefined ? imgUrl.backdrop_sizes.original + movie.poster_path : img_placeholder}
                 alt="poster"/>
            <div className={css.content}>
                <PosterLarge movieToPoster={movie}/>
                <div className={css.topMovie}>
                    <div className={css.topMovieHeader}>
                        <h2>New discovered: </h2>
                        <a href="" onClick={(e) => {
                            e.preventDefault();
                            const genreMovie = () => navigate('/main/search_undefined/null');
                            genreMovie();}}>
                            <b>see all &gt;&gt;</b></a>
                    </div>
                    <div className={css.topMovieWrap}>
                        {topMovie.map(movie => <Link key={movie.id} to={'/movie/' + movie.id}><MovieListCard
                        movie={movie}/></Link>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosterTitles;