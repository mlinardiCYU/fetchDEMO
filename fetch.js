async function afficherMeteo() {
    const reponse = await fetch("./festivals-val-d'oise.json");
    const festival = await reponse.json();
    console.log(festival);
  }

afficherMeteo();