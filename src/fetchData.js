//Fetching data from Spotify API Endpoints
import { useEffect, useState } from 'react';
const artistId = "1z7b1Pr1rSlvWRzsW3HOrS"; //Russ
// const artistId = "0xEVr5H3VEj3g11u1q6ifW"; //MZ

// const albumId = window.location.pathname

export const useFetch = (accessToken) => {

    const [myPlaylists, setMyPlaylists] = useState(null);
    const [artist, setArtist] = useState(null);
    const [artistAlbums, setArtistAlbums] = useState(null);
    const [userAlbums, setUserAlbums] = useState(null);
    const [user, setUser] = useState(null);

    const [loadingMyPlaylists, setLoadingMyPlaylists] = useState(false);
    const [loadingArtist, setLoadingArtist] = useState(false);
    const [loadingArtistAlbums, setLoadingArtistAlbums] = useState(false);
    const [loadingUserAlbums, setLoadingUserAlbums] = useState(false);
    const [loadingUser, setLoadingUser] = useState(false);
    
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchMyPlaylists = async () => {
            setLoadingMyPlaylists(true);
            const response = await fetch("https://api.spotify.com/v1/me/playlists", { method: "GET", signal: signal,
                headers: { "Content-Type": "application/json",
                "Accept": "application/json", "Authorization": `Bearer ${accessToken}`}
            });
            const data = await response.json();
            setMyPlaylists(data);
            setLoadingMyPlaylists(false);
        }
        fetchMyPlaylists();

        const fetchArtist = async () => {
            setLoadingArtist(true);
            const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, { method: "GET", signal: signal,
                headers: { "Content-Type": "application/json",
                "Accept": "application/json", "Authorization": `Bearer ${accessToken}`}
            });
            const data = await response.json();
            setArtist(data);
            setLoadingArtist(false);
        }
        fetchArtist();

        const fetchArtistAlbums = async () => {
            setLoadingArtistAlbums(true);
            const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album`, { method: "GET", signal: signal,
                headers: { "Content-Type": "application/json",
                "Accept": "application/json", "Authorization": `Bearer ${accessToken}`}
            });
            const data = await response.json();
            setArtistAlbums(data);
            setLoadingArtistAlbums(false);
        }
        fetchArtistAlbums();

        // const fetchAlbum = async () => {
        //     setLoadingAlbum(true);
        //     const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, { method: "GET", signal: signal,
        //         headers: { "Content-Type": "application/json",
        //         "Accept": "application/json", "Authorization": `Bearer ${accessToken}`}
        //     });
        //     const data = await response.json();
        //     setAlbum(data);
        //     setLoadingAlbum(false);
        // }
        // fetchAlbum();

        const fetchUserAlbums = async () => {
            setLoadingUserAlbums(true);
            const response = await fetch('https://api.spotify.com/v1/me/albums', { method: "GET", signal: signal,
                headers: { "Content-Type": "application/json",
                "Accept": "application/json", "Authorization": `Bearer ${accessToken}`}
            });
            const data = await response.json();
            setUserAlbums(data);
            setLoadingUserAlbums(false);
        }
        fetchUserAlbums();

        const fetchUser = async () => {
            setLoadingUser(true);
            const response = await fetch('https://api.spotify.com/v1/me', { method: "GET", signal: signal,
                headers: { "Content-Type": "application/json",
                "Accept": "application/json", "Authorization": `Bearer ${accessToken}`}
            });
            const data = await response.json();
            setUser(data);
            setLoadingUser(false);
        }
        fetchUser();

        return function cleanup(){abortController.abort()};
        
    }, [accessToken]);

    return {myPlaylists, artist, artistAlbums, userAlbums, user, loadingMyPlaylists, loadingArtist, loadingArtistAlbums, loadingUserAlbums, loadingUser};
}

// GENERIC FUNCTION (not working)

// export const useFetch = (url, accessToken) => {

//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const abortController = new AbortController();
//         const signal = abortController.signal;

//         const fetchData = async () => {
//             const response = await fetch(url, { method: "GET", signal: signal,
//                 headers: { "Content-Type": "application/json",
//                 "Accept": "application/json", "Authorization": `Bearer ${accessToken}`}
//             });
//             const _data = await response.json();
//             console.log("data",_data);
//             setData(_data);
//             setLoading(false);
//         }
//         fetchData();

//         return function cleanup(){abortController.abort()};
        
//     }, [url, accessToken]);

//     return {data, loading};
// }