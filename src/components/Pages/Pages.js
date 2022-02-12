import React from 'react';

import css from './Pages.module.css'

const Pages = ({page, setPage, pages}) => {
    return (
        <div className={css.pages}>
            Page:
            <a href="#" onClick={()=>setPage(1)}>1</a>
            <a href="#" onClick={()=>setPage(page-1===0?1:page-1)}>&lt;</a>
            <a href="#">{page}</a>
            <a href="#" onClick={()=>setPage(page+1>pages?pages:page+1)}>&gt;</a>
            <a href="#" onClick={()=>setPage(pages)}>{pages}</a>
        </div>
    );
};

export default Pages;
