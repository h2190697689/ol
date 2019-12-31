//创建地图
var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({ 
        center: [-72.980624870461128, 48.161307640513321],
        zoom: 8,
        projection: 'EPSG:4326'
    }),
    target: 'map'
});

var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: '../data/geojson/line-samples.geojson', 
        format: new ol.format.GeoJSON()
    }),
    // 设置样式，颜色为红色，线条粗细为1个像素
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'red',
            size: 1
        })
    })
});

map.addLayer(vectorLayer);