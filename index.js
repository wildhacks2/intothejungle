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
    "<div class='popup'>Amazon Rainforest <br> Impact of Human Activity on Rainforests<br><a href='./jungle3/main/jungle3.html'>Learn More</a></div>"
  )

// add marker Daintree Rainforest
L.marker([-16.164790459877185, 145.4189750188323])
  .addTo(map)
  .bindPopup(
    "<div class='popup'>Daintree Rainforest <br> Learn about Endangered Animal Species and Animal Fun Facts<br><a href='./daintree/daintree.html'>Learn More</a></div>"
  )

// add marker Amazon Rainforest
L.marker([-1.801150808947209, 16.97109905499256])
  .addTo(map)
  .bindPopup(
    "<div class='popup'>Congo Rainforest <br> Importance of Rainforest conservation<br><a href='./jungle3/main/jungle3.html'>Learn More</a></div>"
  )