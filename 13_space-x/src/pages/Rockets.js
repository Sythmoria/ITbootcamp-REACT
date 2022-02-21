import React, { useEffect, useState } from "react";
import API from '../config/api';

const Rockets = () => {

    const [rockets, setRockets] = useState([]);

    useEffect(() => { }, []);
    useEffect(() => {
        API.get('/rockets')
            .then(res => {
                // console.log(res);
                setRockets(res.data);
            })
    }, []);

    return (
        <div>
            <h2>Rockets</h2>
            <ul>
                {
                    rockets && rockets.map((rocket) =>
                        <li key={rocket.rocket_id}>

                            <h3>{rocket.rocket_name}</h3>

                            <img src={rocket.flickr_images[0]} width="500" />
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Rockets;