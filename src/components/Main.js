import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Library from './Library';
import "./styles/Main.css";

function Main(props) {
    console.log("HELLO", props.artist)
    return (
        <div className="main">
            <Switch>
                <Route exact path='/' component={() => <Home artist={props.artist} artistAlbums={props.artistAlbums} />} />
                <Route path="/search" component={Search} />
                <Route path="/library" component={Library} />
            </Switch>
        </div>
    );
}

export default Main;
