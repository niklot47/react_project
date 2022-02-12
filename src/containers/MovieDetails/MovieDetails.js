import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import ReactStars from "react-stars";

import css from './MovieDetails.module.css'
import {imgUrl} from "../../config/imgUrl";
import {movieService} from "../../services/movie.service";
import noimg from "../../img/noimg.png";
import SimilarMovie from "../../components/SimilarMovie/SimilarMovie";
import SameGenres from "../../components/SameGenres/SameGenres";

const MovieDetails = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        movieService.getMovieById(id).then(value => {
            setMovie(value);
            console.log(value);
        });
    }, [id])

    const toGenre =  (id) =>{
        let str = '/main/search_undefined/'+ id;
        const genreMovie = () => navigate(str);
        genreMovie();
    }

    return (
        <div className={css.all}>
            {!movie || <div className={css.main}>
                <div>
                    <img className={css.poster}
                         src={movie.poster_path ? imgUrl.poster_sizes.w780 + movie.poster_path : noimg} alt="poster"/>
                </div>
                <div className={css.details}>
                    <div className={css.info}>
                        <div className={css.title}>
                            <div><h2>{movie.title}</h2></div>
                            <div><h4>{movie.tagline}</h4></div>
                            <ReactStars
                                half={true}
                                value={movie.vote_average/2}
                                count={5}
                                edit={false}
                                size={42}
                                color2={'#ffd700'}
                            />
                        </div>
                        <div>
                            <div><b>Original title:</b> {movie.original_title}</div>
                            <div><b>Runtime:</b> {movie.runtime} min.</div>
                            <div><b>Vote average:</b> {movie.vote_average} / 10</div>
                        </div>
                        <div>
                            <div><b>Budget:</b> {movie.budget} $</div>
                            <div><b>Revenue:</b> {movie.revenue} $</div>
                            <div><b>Release date:</b> {movie.release_date}</div>
                            <div><b>Original language:</b> {movie.original_language}</div>
                        </div>
                        <div>
                            <div><b>Popularity:</b> {movie.popularity}</div>
                            <div><b>Vote average:</b> {movie.vote_average} / 10 ({movie.vote_count} votes)</div>
                        </div>
                        <div>
                            <b>Production countries:</b>
                            {movie.production_countries.map(country => <div key={country.name}
                                                                            className={css.country}>{country.name}</div>)}
                        </div>
                        <div>
                            <b>Genres:</b>
                            {
                                movie.genres.map(genre => <a href="#" onClick={()=>toGenre(genre.id)} key={genre.id}
                                                               className={css.country}>{genre.name}</a>)
                            }
                        </div>
                        <div>
                            <div>
                                {!movie.homepage ||
                                <div><b>Homepage: </b><a href={movie.homepage}>{movie.homepage}</a></div>}
                            </div>
                            <b>Production companies:</b>
                            {movie.production_companies.map(companie => <div key={companie.id} className={css.country}>
                                {companie.name}
                                {!companie.logo_path ||
                                <img className={css.com_logo} src={imgUrl.logo_sizes.w92 + companie.logo_path}
                                     alt=""/>}
                            </div>)}
                        </div>
                    </div>
                    <p><b>Overview:</b> {movie.overview}</p>
                </div>
            </div>
            }
            <div>
                {!movie || <SameGenres genres={movie.genres}/>}
            </div>
            <div>
                {!movie || <SimilarMovie id={movie.id}/>}
            </div>
        </div>
    );
};

export default MovieDetails;