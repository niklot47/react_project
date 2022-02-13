import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './GenreBadge.module.css'

const GenreBadge = ({id}) => {

    const navigate = useNavigate();

    const toGenre = (id) => {
        let str = '/main/search_undefined/' + id;
        const genreMovie = () => navigate(str);
        genreMovie();
    }
    let genres = (JSON.parse(sessionStorage.getItem('genres')) || [])
    genres = genres.filter(genre => genre.id === id)
    // console.log(genres[0].name);
    return (
        <div className={css.badge}>
            <a href="#" onClick={()=>toGenre(genres[0].id)}>{genres[0].name}</a>
        </div>
    );
};

export default GenreBadge;