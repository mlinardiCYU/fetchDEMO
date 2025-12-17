// Initialisation de la carte Leaflet
    // Initialisation de la carte centrée sur l'IUT de Cergy-Pontoise (site de Sarcelles)
    var map = L.map('map').setView([48.97493819043853, 2.376970316125221], 13);

    // Ajout d'une couche de tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Exemple de données GeoJSON (un simple point)
    //attention!! Les coordonnées de chaque point sont dans l'ordre [longitude, latitude]
    // ici deux points : l'IUT de Sarcelles et la gare de Garges-Sarcelles
    // conseil: cherchez d'utiliser l'API fetch pour charger des fichiers GeoJSON externes
    
    var geojsonFeature = [ 
    {
        "type": "Feature",
        "properties": {
            "name": "IUT Sarcelles"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [2.376970316125221, 48.97493819043853]
        }
    },
    {
    "type": "Feature",
    "properties": {
        "name": "Gare de Garges-Sarcelles"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3907609603059328, 48.97695539572013]
    }
    }
];

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties.name) {
        layer.bindPopup("<p style=\"font-weight:bold;\">" + feature.properties.name + "</p>");
    }
}

// Ajout des données GeoJSON à la carte
L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(map);


