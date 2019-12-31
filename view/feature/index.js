import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import OSM from 'ol/source/OSM';

new Map({
    layers: [
        new Tile({
            source: new OSM()
        }),
        new VectorLayer({
            source: new VectorSource({
                url: '../data/geojson/line-samples.geojson',     // 地图来源
                format: new ol.format.GeoJSON()    // 解析矢量地图的格式化类
            })
        })
    ],
    view: new View({
        center: [-72.980624870461128, 48.161307640513321],
        zoom: 8,
        projection: 'EPSG:4326'
    }),
    target: "map"
})