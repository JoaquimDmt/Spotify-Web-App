import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromResponse } from "./spotify";

function App() {

  const [token, setToken] = useState(null);//de base : pas de token
  
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
  }, []); //useEffect function runs when App component loads or when what's in [] changes
 
  return (
    <div className="app">
      {
        token ? (
          <h1>GG !</h1>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;