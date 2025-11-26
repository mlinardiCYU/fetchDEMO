async function afficherMeteo() {
    const reponse = await fetch("./festivals-val-d'oise.json");
    const festival = await reponse.json();
    console.log(festival);
    console.log(festival);
    console.log("Nom du premier festival: "+festival[0].nom_du_festival);
  }

afficherMeteo();