import React from 'react';
import { NavLink } from 'react-router-dom';
import "./styles/Sidebar.css";

import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src="/images/spotify-white.png" alt=""/>
                <img src="/images/beevora-logo.png" alt=""/>
            </div>
            <div className="sidebar__links">
                <NavLink exact to="/" className="sidebar__link" activeClassName="sidebar__link--active">
                    <HomeIcon/><h4>Accueil</h4>
                </NavLink>
                <NavLink exact to="/search" className="sidebar__link" activeClassName="sidebar__link--active">
                <SearchIcon/><h4>Rechercher</h4>
                </NavLink>
                <NavLink exact to="/library" className="sidebar__link" activeClassName="sidebar__link--active">
                    <LibraryMusicIcon/><h4>Bibliothèque</h4>
                </NavLink>
            </div>

            <br/>
            <strong>PLAYLISTS</strong>
            <hr/>

        </div>
    );
}

export default Sidebar;
