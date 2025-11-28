const ctx = document.getElementById('myChart');


async function afficherEffectifsParDepartement() {

  // nous utilisons fetch pour récupérer les données du fichier JSON
  // qui contient les effectifs en terminale par departement
    
  const reponse = await fetch("./effectifs-en-terminale-specialites-academie-versailles-2022.json");
  const departements = await reponse.json();
	
	//extraire 10 departements
	const dixDepartements = departements.slice(0, 9);

	function getGarcons(departement)
	{
		return departement.effectif_total_garcons;
	}
	function getFilles(departement)
	{
		return departement.effectif_total_filles;
  }
  function getNomDepartement(departement)
  {
    return departement.libelle_departement;
  }
	//extraire nom departements, effectifs garcons et effectifs filles
  const tableauDepartements = dixDepartements.map(getNomDepartement);
  const tableauGarcons = dixDepartements.map(getGarcons);
	const tableauFilles = dixDepartements.map(getFilles);
  
  // creer le graphique avec ChartJS
	new Chart(ctx, 
		
		{
		type: 'line',
		data: {
		  labels: tableauDepartements,
		  datasets: [{
			label: 'effectifs garçons',
			data: tableauGarcons,
			borderWidth: 1
		  } ,
      {
			label: 'effectifs filles',
			data: tableauFilles,
			borderWidth: 1
		  } 		
		]
		},
		options: {
		  scales: {
			y: {
			  beginAtZero: true
			}
		  }
		}
	  }


	);
  

}

afficherEffectifsParDepartement();