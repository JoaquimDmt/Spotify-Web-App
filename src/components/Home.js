import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Avatar from '@material-ui/core/Avatar';
import "./styles/Home.css";

function Home(props) {

    return (
        <div className="home">
            <div className="home__artistHeader">
                <img src={props.artist.images[0].url} alt={props.artist.name}/>
                <div className="home__opacityLayer"></div>
                <div className="home__artistTitle">
                    <h3>Artiste</h3>
                    <h1>{props.artist.name}</h1>
                </div>
                <div className="home__profileButton">
                    <Avatar alt={props.user.display_name} src={props.user.images.url} />
                    <h4>{props.user.display_name}</h4>
                </div>
            </div>
            <div className="home__albumsContainer">
                <h2>Albums</h2>
                <div className="home__cards">
                    {props.artistAlbums.items.map(item => 
                    <div key={item.id} className="home__card"> 
                        <Link to={`/album/${item.id}`}>
                            <img src={item.images[0].url} alt="pochette de l'album"/>
                        </Link>
                        <Link to={`/album/${item.id}`} style={{ textDecoration: 'none' }}>
                            <h4> {item.name} </h4> 
                        </Link>
                    </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;