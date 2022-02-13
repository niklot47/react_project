import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import css from './SearchMovie.module.css'


const SearchMovie = () => {

    const [searchKey, setSearchKey] = useState('');

    const searchMovies = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={searchMovies} className={css.search}>
                <input type="text" onChange={(e) => {setSearchKey(e.target.value)}}/>
                <NavLink to={'/main/'+(searchKey===''?"search_undefined":searchKey)+'/null'}><button type={'submit'}>Search</button></NavLink>
            </form>
        </div>
    );
};

export default SearchMovie;
