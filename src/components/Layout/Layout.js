import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

import css from "./Layout.module.css";
import logo from '../../img/logo.png';
import SearchMovie from "../SearchMovie/SearchMovie";
import GeneresDropDown from "../GeneresDropDown/GeneresDropDown";
import PaletteSelector from "../PaletteSelector/PaletteSelector";

export const scrollOutletTo = (scrollTo)=>{
    const block = document.getElementById('outlet');
    if (block) block.scrollTop = scrollTo;
}


const Layout = () => {
    return (
        <div className={css.wrap_dark}>
            <div className={css.header_dark}>
                <div>
                    <img className={css.logo} src={logo} alt="logo"/>
                </div>
                <div className={css.navPanel}>
                    <NavLink to={'/'}>Movies</NavLink>
                    {/*<NavLink to={'/main/'+'search_undefined/null'}>Movies</NavLink>*/}
                    <GeneresDropDown/>
                    <SearchMovie/>
                </div>
                <div  className={css.navPanel}>
                    <PaletteSelector/>
                    <Link to='/user'>
                        <button className={css.btn}>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
            <div id={'outlet'} className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;