import ol from "ol";
class Gis{
    mapLayer1 = null;
    mapLayer2 = null;
    vectorLayer = null;
    map = null;
    constructor(){

    }

    init(){
        this.mapLayer1 = new ol.layer.Tile({
            source: new ol.source.OSM(),
            visible: true
        })
        this.mapLayer2 = new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: '/scgis/roadmap?gl=cn&level={z}&col={x}&row={y}'
            })
        })
        this.vectorLayer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: []
            })
        })
        this.map = new Map({
            target: "map",
            view: new ol.view({
                center: [130,30],
                zoom: 8,
                projection: 'EPSG:4326'
            }),
            layers: [this.mapLayer1, this.mapLayer2, this.vectorLayer]
        })
    }
}