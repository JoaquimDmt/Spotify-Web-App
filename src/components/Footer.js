import React from 'react';
import "./styles/Footer.css";

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import DevicesRoundedIcon from '@material-ui/icons/DevicesRounded';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                {/* <FavoriteBorderIcon/> */}
            </div>
            <div className="footer__player">
                <div className="footer__controls">
                    <ShuffleIcon/>
                    <SkipPreviousIcon/>
                    <PlayArrowIcon/>
                    {/* <PauseIcon/> */}
                    <SkipNextIcon/>
                    <RepeatRoundedIcon/>
                </div>
                <div>

                </div>
            </div>
            <div className="footer__right">
                <PlaylistPlayIcon/>
                <DevicesRoundedIcon/>
                <VolumeUpOutlinedIcon/>
            </div>
        </div>
    );
}

export default Footer;
