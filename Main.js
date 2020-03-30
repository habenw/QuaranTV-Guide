import React, { useState } from 'react';
import {  Router,Link} from '@reach/router';

import axios from 'axios';
export default () => {
    const [movie, setMovie] = useState([]);
    const handleClick=()=>{
        let config = {
            headers:{
                "client":"HABE",
                "x-api-key":"oJadOx02rd7eV3lRAuvzq7ZjXsn2ea43tGXEOSR0",
                "authorization":"Basic SEFCRTp3QVlldGNQdW5RaUl=",
                "api-version":"v102",
                "territory": "US",
                "device-datemtime":"2020-03-31T08:30:17.360Z"
            }
        }
        axios.get('https://api-gate2.movieglu.com/',config)

            .then(response=>{
                console.log(response)
                setMovie(response.data.results)
            })
    }
    return(
        <div id="nav">
        <button onClick={handleClick}>What's on Today?</button>    
            {movie.map((item, i) => 
                <li key={i}>
                    {item.name}
                </li>
            )}
        </div>
    )
}

