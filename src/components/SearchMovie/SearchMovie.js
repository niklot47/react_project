import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {saveSearchKey, searchMovieThunk} from "../../stor";

import css from './SearchMovie.module.css'
import {NavLink} from "react-router-dom";


const SearchMovie = () => {

    const [searchKey, setSearchKey] = useState('');

    const searchMovies = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={searchMovies} className={css.search}>
                <input type="text" onChange={(e) => setSearchKey(e.target.value)}/>
                <NavLink to={'/main/'+searchKey+'/null'}><button type={'submit'}>Search</button></NavLink>
            </form>
        </div>
    );
};

export default SearchMovie;
