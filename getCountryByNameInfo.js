async function getCountryByName(name = 'France') {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

//Nous recuperons les données pour Chypre
dataJSON = getCountryByName("Cyprus");
console.log(dataJSON);