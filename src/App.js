import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import { getTokenFromResponse } from "./spotifyAuth";
import { useFetch } from "./fetchData";

function App() {

  const [token, setToken] = useState(null);//de base : pas de token
  // const [token, setToken] = useState("skip-token");//supprimer après développement
  
  useEffect(() => {
    const hash = getTokenFromResponse(); //la fonction renvoi un objet (cf. spotify.js) ->
      //   { access_token:"BQDZ7G...YTXZdnSg",
      //   token_type:"Bearer",
      //   expire_in:"3600" }
      window.location.hash = ""; //sécurité pour retirer le token de l'url
      const _token = hash.access_token;
      if (_token) {
        setToken(_token);
      }
  }, []); //useEffect function runs when App component loads or when what's in [] changes (similaire à componentDidMount + componentDidUpdate + componentWillUnmount)


  const { myPlaylists, artist, artistAlbums, userAlbums, user, loadingMyPlaylists, loadingArtist, loadingArtistAlbums, loadingUserAlbums, loadingUser } = useFetch(token);
  // console.log(token)
  // console.log("dezdcnez", album)
  return (
    <div className="app">
      { token ? (
          <div className="app__container">
            <div className="app__body">
              { !loadingMyPlaylists &&
                <Sidebar playlists={myPlaylists}/>
              }
              { !loadingArtist && !loadingArtistAlbums && !loadingUserAlbums && !loadingUser &&
                <Main artist={artist} artistAlbums={artistAlbums} userAlbums={userAlbums} user={user} token={token}/>
              }
            </div>
          </div>
        ) : (
          <Login/>
        )}
    </div>
  );
}

export default App;