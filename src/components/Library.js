import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Avatar from '@material-ui/core/Avatar';
import "./styles/Library.css";

function Library(props) {

    return (
        <div className="library">
            <h2>Mes Albums</h2>
            <div className="library__cards">
                {props.userAlbums.items.map(item => 
                <div key={item.album.id} className="library__card"> 
                    <Link to={`/album/${item.album.id}`}>
                        <img src={item.album.images[0].url} alt="pochette de l'album"/>
                    </Link>
                    <Link to={`/album/${item.album.id}`} style={{ textDecoration: 'none' }}>
                        <h4> {item.album.name} </h4> 
                    </Link>
                </div>
                )}
            </div>
            <div className="library__profileButton">
                <Avatar alt={props.user.display_name} src={props.user.images.url} />
                <h4>{props.user.display_name}</h4>
            </div>
            <Footer/>
        </div>
    );
}

export default Library;