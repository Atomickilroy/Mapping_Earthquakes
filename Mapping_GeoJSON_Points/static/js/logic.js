// Add console.log to check to see if our code is working
console.log("working");


<<<<<<< Updated upstream
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);


// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, {
    //onEachFeature: function(feature, layer) {
      //console.log(layer);
      //return L.marker(layer)
       //.bindPopup("<h2>" + feature.properties.name + "</h2>" + "<h3>"+ feature.properties.city+ ", " + feature.properties.country  + "</h3>");
    //}

  //}).addTo(map);

=======
>>>>>>> Stashed changes
// We create the tile layer that will be the background of our map.
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//Night Preview
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {    
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Atomickilroy/Mapping_Earthquakes/main/majorAirports.json";

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);

// Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data,{
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2>" + feature.properties.name + "</h2>" + "<h3>"+ feature.properties.city+ ", " + feature.properties.country  + "</h3>");
    }
  }).addTo(map);
});



<<<<<<< Updated upstream
=======

//"<h2>" + feature.properties.name + "</h2>" + "<h3>"+ feature.properties.city+ ", " + feature.properties.country  + "</h3>"
//return L.marker(layer)
>>>>>>> Stashed changes
