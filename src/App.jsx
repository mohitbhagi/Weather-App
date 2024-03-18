import './App.css'
import WeatherApp from './WeatherApp';
// import InfoBox from './InfoBox';
// import SearchBox from './SearchBox';

function App() {
  let handleClick = () => {
    console.log("Button is cliced");
  }

  return (
    <>
      <h2>Weather App</h2>
      <WeatherApp />
    </>
  )
}

export default App
