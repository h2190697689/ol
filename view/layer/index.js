import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import BingMaps from "ol/source/BingMaps";
import Stamen from "ol/source/Stamen";

var openStreeMapLayer = new Tile({source: new OSM()});

var bingMapLayer = new Tile({source: new BingMaps({key: 'AkjzA7OhS4MIBjutL21bkAop7dc41HSE0CNTR5c6HJy8JKc7U9U9RveWJrylD3XJ',
imagerySet: 'Road'})})

var stamenLayer = new Tile({source: new Stamen({layer: "watercolor"})});

var gaodeMapLayer = new Tile({source: new XYZ({url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'})})

var map = new Map({
    layers: [
        // openStreeMapLayer,
        // bingMapLayer,
        // stamenLayer
        gaodeMapLayer
    ],
    view: new View({
        center: [120.12, 30.16],
        projection: 'EPSG:4326',
        zoom: 10
    }),
    target: "map"
});

function switch2OSM() {
    // 先移除当前的地图，再添加Open Street Map 地图
    map.removeLayer(map.getLayers().item(0));
    map.addLayer(openStreetMapLayer);
}