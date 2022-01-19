import React from "react";

import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <div className="App">
            <div className='header'>
                <Users/>
                <UserDetails/>
            </div>
            <Posts/>
        </div>
    );
}

export default App;
