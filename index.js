import "ol/css.js"
import Map from "ol/Map";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";

const view = new View({
    // center: [-116.46,39.92],  // 定义地图显示中心于经度0度，纬度0度处
    center: transform([104.06, 30.67], 'EPSG:4326', 'EPSG:3857'),
    extent: [102, 29, 104, 31],
    zoom: 8,    // 并且定义地图显示层级为2
    minZoom: 6,
    maxZoom: 14
})
new Map({
    // 设置地图图层
    layers: [
        // 创建一个使用Open Street Map地图源的瓦片图层
        new Tile({source: new OSM()})
    ],
    // 设置显示地图的视图
    // view: new View({
    //     center: [-116.46,39.92],  // 定义地图显示中心于经度0度，纬度0度处
    //     zoom: 8    // 并且定义地图显示层级为2
    // }),
    view,
    // 让id为map的div作为地图的容器
    target: "map"
})