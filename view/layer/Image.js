import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import Image from "ol/layer/Image";
import ImageStatic from "ol/source/ImageStatic";
import ImageSource from "ol/source/Image";

export function getImageMap(){
    new Map({
        layers: [
            new Image({
                source: new ImageStatic({
                    url: "/back.png",
                    imageExtent: [129,29,131,31]
                })
            })
        ],
        view: new View({
            center: [130,30],
            projection: "EPSG:4326",
            zoom: 8
        }),
        target: "map"
    })
}