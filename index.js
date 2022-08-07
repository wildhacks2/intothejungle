var jungles = L.layerGroup();

// basic tile layer
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});

// add marker Amazon Rainforest
L.marker([-3.4647054431875395, -62.21605220740857])
  .addTo(jungles)
  .bindPopup(
    "<div class='popup'>Amazon Rainforest <br> Impact of Human Activity on Rainforests<br><a href='./jungle3/main/jungle3.html'>Learn More</a></div>"
  );

// add marker Daintree Rainforest
L.marker([-16.164790459877185, 145.4189750188323])
  .addTo(jungles)
  .bindPopup(
    "<div class='popup'>Daintree Rainforest <br> Learn about Endangered Animal Species and Animal Fun Facts<br><a href='./daintree/daintree.html'>Learn More</a></div>"
  );

// add marker Congo Rainforest
L.marker([-1.801150808947209, 16.97109905499256])
  .addTo(jungles)
  .bindPopup(
    "<div class='popup'>Congo Rainforest <br> Importance of Rainforest conservation<br><a href='./whyConservation/whyConservation.html'>Learn More</a></div>"
  );

var map = L.map("map", {
  center: [0, 35],
  zoom: 2,
  layers: [osm, jungles],
});

var baseLayers = {
  OpenStreetMap: osm,
};

var layerControl = L.control.layers(baseLayers).addTo(map);

var mbAttr =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
var mbUrl =
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

var satellite = L.tileLayer(mbUrl, {
  id: "mapbox/satellite-v9",
  tileSize: 512,
  zoomOffset: -1,
  attribution: mbAttr,
});

layerControl.addBaseLayer(satellite, "Satellite");
