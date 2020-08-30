import React from 'react';
// import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import SearchIcon from '@material-ui/icons/Search';
import "./styles/Search.css";

function Search(props) {

    // const search = "eminem";
    // const [searchResult, setSearchResult] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchSearch = async () => {
    //         const response = await fetch(`https://api.spotify.com/v1/search?q=${search}&type=track`, { method: "GET",
    //         headers: { "Content-Type": "application/json",
    //         "Accept": "application/json", "Authorization": `Bearer ${props.token}`}
    //         });
    //         const data = await response.json();
    //         setSearchResult(data);
    //         // setLoading(false);
    //     }
    //     fetchSearch();
    // }, [props.token, searchResult]);

    // console.log(searchResult)

    return (
        <div className="search">
            <h3>coming soon</h3>
            <h1>Search</h1><SearchIcon/>
            <Footer/>
        </div>
    );
}

export default Search;