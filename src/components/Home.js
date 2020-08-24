import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Home.css";

function Home(props) {
    console.log("HELLO2", props.artist)
    return (
        <div className="home">
            <div className="home__artistHeader">
                <img src={props.artist.images[0].url} alt=""/>
                <h1>{props.artist.name}</h1>
            </div>
            <div className="home__albumsContainer">
                <h2>Albums</h2>
                <div className="home__cards">
                    {props.artistAlbums.items.map(item => 
                    <div className="home__card"> 
                        <img src={item.images[1].url} alt=""/>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h4> {item.name} </h4> 
                        </Link>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;