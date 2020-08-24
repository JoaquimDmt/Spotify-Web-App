import React from 'react';
import "./styles/Home.css";

function Home(props) {
    console.log("BYE", props.artist)
    return (
        <div className="home">
            <h1>Home</h1>
            {props.artist.name}
            {props.artistAlbums.items.map(item => <li> {item.name} </li>)}
        </div>
    );
}

export default Home;