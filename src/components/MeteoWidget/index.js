import PropTypes from 'prop-types'; 
import { useEffect, useState } from 'react';
import axios from 'axios';

import "./style.scss";
const MeteoWidget = ({city, zipcode}) => {

    const [temperature, setTemperature] = useState(null);

    useEffect(
        () => {
            axios
                .get('http://localhost:1234')
                .then(
                    (response) => {
                        console.log(response.data.main.temp)
                        const receivedTemperature = response.data.main.temp;
                        setTemperature(Math.round(receivedTemperature));
                    }
            );
        }, 
        [],
    )

    return (
        <div className="meteo-widget">
            <div className="meteo-widget__info">
                <h1 className="meteo-widget__info__city">{ city }</h1>
                <h2 className="meteo-widget__info__zipcode">{ zipcode }</h2>
            </div>
            <div className="meteo-widget__temperature">
                {temperature !== null ? `${temperature}°C` : "..."}
            </div>
        
        </div>
    );
};

MeteoWidget.propTypes = {
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.number.isRequired
}

export default MeteoWidget;
