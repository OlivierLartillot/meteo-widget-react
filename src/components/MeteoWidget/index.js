import "./style.scss";

const MeteoWidget = ({city, zipcode}) => {

    return (
        <div className="meteo-widget">
            <h1>Meteo widget</h1>
            <div className="meteo-widget__info">
                <h1 className="meteo-widget__city">Avignon</h1>
                <h2 className="meteo-widget__zipcode">84000</h2>
            </div>
            <div className="meteo-widget__temperature">
                12°
            </div>
        </div>
    );
};

export default MeteoWidget;
