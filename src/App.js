import React from "react";
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserPage from "./containers/UserPage/UserPage";
import NotFound from "./containers/NotFound/NotFound";
import MovieList from "./containers/MovieList/MovieList";
import MovieDetails from "./containers/MovieDetails/MovieDetails";
import HomePage from "./containers/HomePage/HomePage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'main/:search/:genres'} element={<MovieList/>}/>
                    <Route path={'movie/:id'} element={<MovieDetails/>}/>
                    <Route path={'user'} element={<UserPage/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
