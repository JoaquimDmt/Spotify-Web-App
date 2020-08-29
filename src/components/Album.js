import React, { useEffect, useState } from 'react';
import ExplicitIcon from '@material-ui/icons/Explicit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
// import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlayCircleFilledTwoToneIcon from '@material-ui/icons/PlayCircleFilledTwoTone';
// import PauseCircleFilledTwoToneIcon from '@material-ui/icons/PauseCircleFilledTwoTone';
import Avatar from '@material-ui/core/Avatar';
// import { useParams } from 'react-router-dom';
import ReactHowler from 'react-howler'
import "./styles/Album.css";
import "./styles/Home.css";

function msToMinutesAndSeconds(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function Album(props) {
    // We can call useParams() here to get the params : https://reacttraining.com/blog/react-router-v5-1/
    // const { match } = useParams(); //not working?
    // let albumId = props.match.params.id;

    const [loading, setLoading] = useState(true);
    const [album, setAlbum] = useState(null);
    const [currentTrackPreview, setCurrentTrackPreview] = useState(null)
    const [playing, setPlaying] = useState(false);

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

    // console.log(album)
    // console.log(currentTrackPreview)
    
    return (
        <>
        {props.token && !loading && (
            <div className="album">
                
                <div className="album__header">
                    <img src={album.images[0].url} alt="pochette de l'album"/>
                    <div className="album__opacityLayer"></div>
                    <div className="album__albumTitle">
                        <h2>Album</h2>
                        <h1>{album.name}</h1>
                        <div className="album__albumInfos">
                            <h4>{album.artists[0].name}</h4>&nbsp;•&nbsp;
                            <h4>{album.release_date.split('-').shift()}</h4>&nbsp;•&nbsp;
                            <h4>{album.total_tracks} Titres</h4>
                        </div>
                    </div>
                    <div className="album__profileButton">
                        <Avatar alt={props.user.display_name} src={props.user.images.url} />
                        <h4>{props.user.display_name}</h4>
                    </div>
                </div>
                
                <ul className="album__trackList">
                    <li key="albumTrackListTitle" className="album__trackListTitle">
                        <div className="album__trackNumber">#</div>
                        <div className="album__trackNameAndInfos">TITRE</div>
                        <div className="album__trackDurationIcon"><AccessTimeIcon/></div>
                    </li>
                    {album.tracks.items.map(item =>
                        <div key={item.id}>
                            <hr/>
                            <li className="album__track"> 

                                <div className="album__trackNumber">
                                    {item.track_number}
                                </div>
                                <div className="album__trackPlayButton" onClick={() => {
                                setCurrentTrackPreview(item.preview_url); 
                                setPlaying(currentTrackPreview === item.preview_url ? false : true)
                                }}>
                                    <PlayCircleFilledTwoToneIcon style={{ fontSize: 28 }}/>
                                </div>
                                <div className="album__trackLike">
                                    <FavoriteBorderRoundedIcon/>
                                </div>
                                
                                <div className="album__trackNameAndInfos">
                                    <div className="album__trackName">
                                        {item.name}&nbsp;
                                    </div>
                                    <div className="album__trackInfos">
                                        <div className="album__trackArtists">
                                            {item.artists.slice(1).map(item => item.name).join(", ")}
                                        </div>
                                    </div>
                                    <div className="album__trackInfos__mobile">
                                        {item.explicit ? (<ExplicitIcon style={{ fontSize: 20, marginRight: 2 }}/>) : ("") }
                                        <div className="album__trackArtists">
                                            {item.artists.map(item => item.name).join(", ")}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <a href={item.preview_url}>url</a> */}
                                <div className="album__trackDuration">
                                    {msToMinutesAndSeconds(item.duration_ms)}
                                </div>   
                                <div className="album__trackOptions">
                                    <MoreHorizIcon/>
                                </div>
                            </li>
                        </div>
                    )}
                </ul>
                {currentTrackPreview && (
                    <ReactHowler
                        src={currentTrackPreview}
                        format={['mp3']}
                        playing={playing ? true : false}
                    />
                )}
            </div>
        )}
        </>
    );
}

export default Album;