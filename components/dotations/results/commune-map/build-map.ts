// Maillage = "commune";
// import * as L from "leaflet";

import { JS_drom } from "./cercles_drom";
import { JS_todo } from "./geoData2020";
import { JS_masque } from "./masque";

// NEW MAP

const map = L.map("mapid", { maxZoom: 11, minZoom: 5 })
  .setView([46.5, -1.8], 6);
map.zoomControl.setPosition("topright");
// TODO check copyright

// MAP STYLE

function getColor1(a, d) { // 1_EVO1920 indicateur 1
  let color;
  if (d > 0.02) {
    color = "#f4661d"; // augmentation
  } else if (d <= -0.02) {
    color = "#fbd9c7"; // diminution
  } else if (d <= 0.02) {
    color = "#f69564"; // stabilité
  } else {
    color = "grey";
  }
  return color;
}

function style_indicateur1(feature) {
  return {
    color: "white",
    fillColor: getColor1(feature.properties.type, feature.properties.N1_EVO1920),
    fillOpacity: 1,
    opacity: 1,
    weight: 0.8,
  };
}

// CAPTIONS

const imageBounds = [[51.9, -5.4], [49.8, 0.16]];
const legende1 = L.imageOverlay("img/legende_indicateur1.png", imageBounds, { zIndex: "1000" });
map.addLayer(legende1);

// LAYERS

map.createPane("territoireCible");
map.getPane("territoireCible").style.zIndex = 600;
map.createPane("regions");
map.getPane("regions").style.zIndex = 500;

// Couches du fond de carte
Cache = L.geoJSON(JS_masque, {
  color: "#7183ab", fillOpacity: 1, opacity: 1, weight: 0,
}).addTo(map);
Cercles_drom = L.geoJSON(JS_drom, {
  color: "#ffffff", fillOpacity: 0, opacity: 0.7, weight: 0.5,
}).addTo(map);
Contour_communes = L.geoJSON(JS_todo, {
  filter(feature, layer) { return feature.properties.type === "commune"; }, // était "région"
  style: {
    color: "#ffffff", fillOpacity: 0, interactive: false, opacity: 1, pane: "territoireCible", weight: 1.5,
  },
}).addTo(map);

let commune = L.geoJSON(JS_todo, {
  filter(feature, layer) { return feature.properties.type === "commune"; },
  onEachFeature(feature, layer) {
    layer.on("click", (e) => {
      territoireCible(e.target._latlngs);
      popup(feature.properties);
      preventDefault(e);
    });
  },
  style: {
    color: "#3e62a4", fillColor: "#00bdce", fillOpacity: 1, opacity: 1, weight: 0.8,
  },
});
commune.setStyle(style_indicateur1);

// ACTIONS

let territoireCib; // Entourer territoire sélectionné lors d'un simple clic
function territoireCible(e) {
  if (territoireCib) { map.removeLayer(territoireCib); }
  territoireCib = new L.polygon(e, {
    color: "#ffee00", fillOpacity: 0, pane: "territoireCible", weight: 3,
  });
  territoireCib.addTo(map);
}

function resetView() {
  map.setView([46.5, -1.8], 6);
}

function resetMap() {
  if (territoireCib) { map.removeLayer(territoireCib); }
}

// Action au clic sur la carte
map.on("click", resetMap);

export { map };
