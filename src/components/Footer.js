import React, { useState } from 'react';
import "./styles/Footer.css";

// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
// import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import DevicesRoundedIcon from '@material-ui/icons/DevicesRounded';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import Slider from '@material-ui/core/Slider';

function Footer(props) {
console.log(props.currentTrack)
    return (
        
        <div className="footer">
            { props.playing == true ? ( <div className="footer__container">
            <div className="footer__left">
                <img src={props.albumCover} alt="pochette de l'album 'Music To Be Murdered By'"/>
                <div className="footer__currentTrack">
                    <h4>{props.currentTrack.name}</h4>
                    <p>{props.currentTrack.artists.map(item => item.name).join(", ")}</p>
                </div>
                <div className="footer__likeButton"><FavoriteIcon style={{ color: "#1db954", fontSize: 20, marginLeft: 10 }}/></div>
            </div>
            <div className="footer__player">
                <div className="footer__controls">
                    <ShuffleIcon/>
                    <SkipPreviousIcon/>
                    <div className="footer__playButton"><PlayArrowIcon/></div>
                    {/* <PauseIcon/> */}
                    <SkipNextIcon/>
                    <RepeatRoundedIcon/>
                </div>
                <div className="footer__currentTrackTimer">
                    <span>0:00</span><hr/><span>3:30</span>
                </div>
            </div>
            <div className="footer__right">
                <PlaylistPlayIcon/>
                <DevicesRoundedIcon/>
                <VolumeUpOutlinedIcon/>
                <Slider className="footer__volumeSlider"/>
            </div>
            </div> ) : ( <div className="footer__container">
            {/* Fake Footer when no sound is playing */}
            <div className="footer__left">
                <img src="https://i.scdn.co/image/ab67616d000048512f44aec83b20e40f3baef73c" alt="pochette de l'album 'Music To Be Murdered By'"/>
                <div className="footer__currentTrack">
                    <h4>Godzilla (feat. Juice WRLD)</h4>
                    <p>Eminem, Juice WRLD</p>
                </div>
                <div className="footer__likeButton"><FavoriteIcon style={{ color: "#1db954", fontSize: 20, marginLeft: 10 }}/></div>
            </div>
            <div className="footer__player">
                <div className="footer__controls">
                    <ShuffleIcon/>
                    <SkipPreviousIcon/>
                    <div className="footer__playButton"><PlayArrowIcon/></div>
                    {/* <PauseIcon/> */}
                    <SkipNextIcon/>
                    <RepeatRoundedIcon/>
                </div>
                <div className="footer__currentTrackTimer">
                    <span>0:00</span><hr/><span>3:30</span>
                </div>
            </div>
            <div className="footer__right">
                <PlaylistPlayIcon/>
                <DevicesRoundedIcon/>
                <VolumeUpOutlinedIcon/>
                <Slider className="footer__volumeSlider"/>
            </div>
            </div> )}
        </div>
    );
}

export default Footer;
