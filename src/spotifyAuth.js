//*CONNEXION AVEC SPOTIFY
//https://developer.spotify.com/documentation/general/guides/authorization-guide/

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = '95bab1d6dea24a14828cf8fdc32960d4';

// Autorisations/permissions demandées à l'utilisateur lors de la connexion pour accéder aux fonctionnalités de Spotify sur leur compte.
const scopes = [
    //Vous acceptez que Spotify x BeeVora puisse :
    "user-library-read", //voir le contenu que vous avez sauvegardé dans Bibliothèque
    "playlist-read-private",//voir les playlists que vous avez créées et auxquelles vous êtes abonné
];

// lien auquel on accède en cliquant sur "Login with Spotify" (cf. documentation)
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;

export const getTokenFromResponse = () => {
    return window.location.hash //réponse dans l'url
    //#access_token=BQDZ7G...YTXZdnSg&token_type=Bearer&expires_in=3600
      .substring(1)
      //access_token=BQDZ7G...YTXZdnSg&token_type=Bearer&expires_in=3600
      .split("&")
      //["access_token=BQDZ7G...YTXZdnSg","token_type=Bearer","expire_in=3600"]
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
    // {
    //   access_token:"BQDZ7G...YTXZdnSg",
    //   token_type:"Bearer",
    //   expire_in:"3600"
    // }
};

