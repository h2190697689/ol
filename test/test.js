import "ol/source/"
import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import {defaults} from "ol/control";
import {transform} from "ol/proj"


new Map({
	target: "map",
	view: new View({
        // center: transform([120, 30],'EPSG:4326', 'EPSG:3857'),
        center: [120, 30],
         // 指定投影使用EPSG:4326
         projection: 'EPSG:4326',
		zoom: 8
    }),
    controls: defaults({
        attributionOptions: ({
        collapsible: false
      })
    }),
    logo: {src: "http://localhost:3002/person.png"},
	layers: [
		new Tile({
			source: new OSM()
		})
	]
})