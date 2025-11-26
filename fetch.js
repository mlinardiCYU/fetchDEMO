async function afficherMeteo() {
    const reponse = await fetch("https://api.tutiempo.net/json/?lan=fr&apid=zwDX4azaz4X4Xqs&ll=40.4178,-3.7022");
    const meteoData = await reponse.json();
    console.log(meteoData);
  }

afficherMeteo();