import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "99a2be0ccba6951f521ee3a90e7c5cb4";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
    
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                humidity: jsonResponse.main.humidity,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                pressure: jsonResponse.main.pressure,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/><br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color: "red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}