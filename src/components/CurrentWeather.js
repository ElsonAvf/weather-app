import React from 'react';

export default function CurrentWeather (props) {
  let color = {
    color: (props.dayStatus) ? '#000000' : '#ffffff'
  };
  let mainStyle = {
    backgroundColor: (props.dayStatus) ? '#86d6d8' : '#333333',
    color: color.color,
  };
  let buttonStyle = {
    backgroundColor: (props.dayStatus) ? '#b9e8ea' : '#444444',
    color: color.color,
  };
  
  return (
    <div style={mainStyle} id='current-weather'>
      <h1 id='city'>{props.name}</h1>
      <h2 id='country'>{props.country}</h2>
      
      <button
        id='unit-button'
        onClick={props.handleClick}
        style={buttonStyle}
      >
        {(props.unit === 'metric') ? '°C' : '°F'}
      </button>
      
      <div id='main-weather'>
        <div id='temperature'>{props.temperature}°</div>
        <img id='weather-icon' src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} />
      </div>
      
      <div id='description'>{props.description}</div>
      <div id='feels-like'>Feels like {props.feel}°</div>
      <div>Humidity {props.humidity}%</div>
      <div id='min-max'>
        <div>Min  {props.min}°</div>
        <div>Max  {props.max}°</div>
      </div>
    </div>
  );
};