import React from 'react';
import { NavLink } from 'react-router-dom';
import "./styles/Sidebar.css";

import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar(props) {
    // const playlist_id= "59ZbFPES4DQwEjBpWHzrtC";
    // const token = "BQCGtpznw7UQuNSXyemJft0kVTMdFupfwyP14qYg0-escZc-eGMa7nh5frEFIS0LoaXJy2MyE9z9OeksneYZnsrP6Io21gsRgntW6dplw5Vp8W6BEjgiN3TZtJ6DHHMwuhbkVqBkJBvYA3QssGHsT8Wo9LjV3xWjWLKjxd6oUPuM";
    console.log(props)
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

            {props.playlists.items.map(item => <li> {item.name} </li>)}
            {/* <useFetch url={`https://api.spotify.com/v1/playlists/${playlist_id}`} method={"GET"} headers={`Authorization: Bearer ${token}`}/> */}
        </div>
    );
}

export default Sidebar;
