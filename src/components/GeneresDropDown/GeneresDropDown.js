import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getAllGenres} from "../../stor/genre.slice";
import css from './GeneresDropDown.module.css'

const GeneresDropDown = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {genres, status, error} = useSelector(state => state['genreReducer']);

    useEffect(() => {
        dispatch(getAllGenres())
    }, [])

    return (
        <form onSubmit={e => e.preventDefault()} className={css.genre}>
            <select onChange={(e) => {
                let str = '/main/search_undefined/' + e.target.value;
                const genreMovie = () => navigate(str);
                console.log(genres);
                genreMovie();
            }}>
                <option className={css.opt} value="null">All genres</option>
                {genres?.map(genre => <option className={css.opt} key={genre.id}
                                              value={genre.id}>{genre.name}</option>)}
            </select>
        </form>
    );
};

export default GeneresDropDown;