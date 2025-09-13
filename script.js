// Initialize map (centered on Europe)
const map = L.map("map").setView([48.8566, 2.3522], 4);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Example airport: Paris Charles de Gaulle
const airport = L.marker([49.0097, 2.5479]).addTo(map);
airport.bindPopup("<b>CDG - Paris Charles de Gaulle</b>");

// Dummy route: CDG to London Heathrow
const routeCoords = [
  [49.0097, 2.5479], // Paris CDG
  [51.4700, -0.4543] // London Heathrow
];
const route = L.polyline(routeCoords, { color: "blue" }).addTo(map);
route.bindPopup("Paris → London");
