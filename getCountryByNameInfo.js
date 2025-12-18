async function getLatLongCountryByName(name = 'France') {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  
  try {

    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response not ok');
    const data = await response.json();
    console.log("lat long Cypre: "+data[0].latlng);
    console.log("data complete Cypre: ", data[0]);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

//Nous recuperons les données pour Chypre
getLatLongCountryByName("Cyprus");
