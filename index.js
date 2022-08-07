// set map position
var map = L.map("map").setView([0, 35], 2);

// basic tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// add marker Amazon Rainforest
L.marker([-3.4647054431875395, -62.21605220740857])
  .addTo(map)
  .bindPopup(
    "Amazon Rainforest <br> Impact of Human Activity on Rainforests"
  )

// add marker Daintree Rainforest
L.marker([-16.164790459877185, 145.4189750188323])
  .addTo(map)
  .bindPopup(
    "Daintree Rainforest <br> Learn about Endangered Animal Species and Animal Fun Facts"
  )

// add marker Amazon Rainforest
L.marker([-1.801150808947209, 16.97109905499256])
  .addTo(map)
  .bindPopup(
    "Congo Rainforest <br> Importance of Rainforest conservation"
  )