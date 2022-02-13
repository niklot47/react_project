import React from 'react';

import css from "./PaletteSelector.module.css";
import {setColorID} from "../../config/palette/colors";

const PaletteSelector = () => {
    setColorID(localStorage.getItem('paletteColorId') || '4');

    return (
        <div>
            <form id={'paletteSelector'} onSubmit={e=>e.preventDefault()} className={css.clr}>
                <select onChange={(e) => {
                    setColorID(e.target.value);
                    localStorage.setItem('paletteColorId', e.target.value)
                }}>
                    <option className={css.clr_opt} value='4'>Blueberry</option>
                    <option className={css.clr_opt} value='5'>Strawberry</option>
                    <option className={css.clr_opt} value='1'>Dark blue</option>
                    <option className={css.clr_opt} value='2'>Dark grey</option>
                    <option className={css.clr_opt} value='3'>Light grey</option>
                </select>
            </form>
        </div>
    );
};

export default PaletteSelector;