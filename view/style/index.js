import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import {Style,Icon,Circle,Stroke,Fill} from "ol/style";
import Point from "ol/geom/Point";

var osmLayer = new Tile({
    source: new OSM()
});
var pointLayer = new VectorLayer({
    source: new VectorSource()
});
var circleLayer = new VectorLayer({
    source: new VectorSource()
});
var map = new Map({
    layers: [osmLayer,pointLayer,circleLayer],
    view: new View({
        center: [119.49,29.33],
        zoom: 10,
        projection: 'EPSG:4326'
    }),
    target: "map"
})

var pointFeature = new Feature({
    geometry: new Point([119.49,29.33])
})
pointFeature.setStyle(new Style({
    image: new Circle({
        radius: 3,
        fill: new Fill({color: "red"}),
        // stroke: new Stroke({color: "red", size: 1})
    })
}))
pointLayer.getSource().addFeature(pointFeature);

var circleFeature = new Feature({
    geometry: new Point([119.49,29.33])
})
circleFeature.setStyle(new Style({
    image: new Circle({
        radius: 10,
        stroke: new Stroke({color: "blue", size: 1})
    })
}))
circleLayer.getSource().addFeature(circleFeature);