import React from 'react';
import './styles/Login.css';
import { loginUrl } from "../spotifyAuth";

function Login() {
    return (
        <div className="login">
            <div className="logos">
                <img src="../images/spotify-green.png" alt="logo de Spotify"/>
                <span>X</span>
                <img src="../images/beevora.png" alt="logo de BeeVora"/>
           </div>
           <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;