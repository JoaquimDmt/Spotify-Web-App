import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import "./styles/Album.css";

function Album(props) {
    // We can call useParams() here to get the params : https://reacttraining.com/blog/react-router-v5-1/
    // const { match } = useParams(); //not working?
    // let albumId = props.match.params.id;

    const [loading, setLoading] = useState(true);
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        const fetchAlbum = async () => {
            const response = await fetch(`https://api.spotify.com/v1/albums/${props.albumId}`, { method: "GET",
                headers: {"Authorization": `Bearer ${props.token}`}
            });
            const data = await response.json();
            setAlbum(data);
            setLoading(false);
        }
        fetchAlbum();
    }, [props.token, props.albumId]);

    return (
        <>
        {props.token && !loading && (
            <div className="album">
                <img src={album.images[0].url} alt=""/>
                <h3>{album.name}</h3>
                {album.tracks.items.map(item => 
                <div> 
                    <li key={item.id}>{item.name}</li>
                    <a href={item.preview_url}>url</a>
                </div>
                )};
            </div>
        )};
        </>
    );
}

export default Album;