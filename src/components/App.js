import React from 'react'
import getWeatherOpenJson from './../fetchData/fetchWeatherOpen';
import Form from './Form';
import CurrentWeather from './CurrentWeather';

import './../assets/normalize.css';
import './../assets/style.css';

export default function App () {
  const [weather, setWeather] = React.useState({});
  const [unit, setUnit] = React.useState('metric');
  const [city, setCity] = React.useState('São Paulo');
  const [isDay, setIsDay] = React.useState();
  
  function displayLoading() {
    document.querySelector('.hidden').style.display = 'block';
  };
  function hideLoading() {
    document.querySelector('.hidden').style.display = 'none';
  };
  
  function toggleIsDay(date) {
    const hour = new Date(date * 1000).getHours();
    (hour > 5 && hour < 18) ? setIsDay(true) : setIsDay(false);
  };
  
  React.useEffect(() => {
    displayLoading();
    getWeatherOpenJson(unit, city).then(json => {
      setWeather({
        name: json.name,
        country: json.sys.country,
        main: json.weather.main,
        temperature: json.main.temp.toFixed(),
        icon: json.weather[0].icon,
        description: json.weather[0].description,
        date: json.dt,
        humidity: json.main.humidity,
        min: json.main.temp_min.toFixed(),
        max: json.main.temp_max.toFixed(),
        feel: json.main.feels_like.toFixed(),
      });
      
      toggleIsDay(json.dt)
      hideLoading();
    }).catch(err => console.log('error'))
  }, [unit, city]);
  
  
  function search(e) {
    e.preventDefault();
    setCity(e.target[0].value.trim())
  };
  
  function toggleUnit() {
    setUnit((prevUnit) => {
      return (prevUnit === 'metric') ? 'imperial' : 'metric';
    });
  };
  
  return (
    <div id='app-container' style={
      {backgroundColor: (isDay) ? '#20c3d0' : '#1d1d1d' }}>
      <div id='app'>
        <Form dayStatus={isDay} handleSubmit={search}/>
        {Object.keys(weather).length > 0 && 
          <CurrentWeather 
            dayStatus={isDay}
            {...weather}
            unit={unit}
            handleClick={toggleUnit}
          />
        }
      </div>
    </div>
  );
};