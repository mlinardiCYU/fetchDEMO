async function getMeteoData(lat = 48.866667, lon = 2.333333) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=celsius&wind_speed_unit=kmh&timezone=Europe/Berlin`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response not ok');
    const data = await response.json();
    console.log('Temperature Actuelle à Paris:', data.current_weather.temperature, '°C');
    console.log('Vitesse du vent à Paris:', data.current_weather.windspeed, 'km/h');
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

getMeteoData();