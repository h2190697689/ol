import "ol/css.js"
import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";

new Map({
    target: "map",
    view: new View({
        center: [130,39],
        zoom: 8,
        projection: 'EPSG:3857', //EPSG:3857
    }),
    layers: [
        new Tile({
            source: new OSM()
        })
    ]
})