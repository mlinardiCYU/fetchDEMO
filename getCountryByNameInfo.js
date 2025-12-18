async function getCountryByName(name = 'France') {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  
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

//Nous recuperons les données pour Chypre
dataJSON = getCountryByName("Cyprus");
console.log(dataJSON);