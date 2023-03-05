export default async function getWeatherOpenJson (unit, local='São Paulo') {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&units=${unit}&appid=9ba274cc5e0fa74510719cfc083af3a2`, { mode: 'cors'});
  const json = await response.json();
  return json;
};
