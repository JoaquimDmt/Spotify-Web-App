import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Library from './Library';
import Album from './Album';
import "./styles/Main.css";

function Main(props) {

    return (
        <div className="main">
            <Switch>
                <Route exact path='/' component={() => <Home artist={props.artist} artistAlbums={props.artistAlbums} user={props.user} />} />
                <Route path="/search" component={Search} />
                <Route path="/library" component={() => <Library userAlbums={props.userAlbums} user={props.user} />} />
                <Route path="/album/:id" render={({match}) => (<Album albumId={match.params.id} token={props.token} /> )}/>
                {/* <Route path="/album/:id" component={Album} /> match.params.id passed in url */}
            </Switch>
        </div>
    );
}

export default Main;