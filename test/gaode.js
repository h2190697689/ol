import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";


export function getGaodeMap(){
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
                    url:'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
                })
            })
        ]
    })
}