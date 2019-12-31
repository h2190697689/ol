import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";


export function getGoogleMap(){
    new Map({
        target: "map",
        view: new View({
            center: [120,30],
            zoom: 8,
            projection: 'EPSG:4326'
        }),
        layers: [
            new Tile({
                source: new XYZ({
                    url:'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i345013117!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0'
                })
            })
        ]
    })
}