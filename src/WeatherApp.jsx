import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 5.15,
        temp: 7.45,
        tempMin: 7.14,
        tempMax: 8.19,
        humidity: 84,
        weather: "rainy",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}