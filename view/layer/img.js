import {transform} from "ol/proj";
import Map from "ol/Map";
import View from "ol/View";
import Feature from "ol/Feature";
import Point from 'ol/geom/Point';
import ImageLayer from "ol/layer/Image";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import ImageStatic from "ol/source/ImageStatic";
import {Style,Icon} from "ol/style";

var center = transform([104.06667, 30.66667], 'EPSG:4326', 'EPSG:3857');

var extent = [center[0]- 550*1000/2, center[1]-344*1000/2, center[0]+550*1000/2, center[1]+344*1000/2];

//创建地图
var map = new Map({
    view: new View({ 
        center: center,
        zoom: 7
    }),
    target: 'map'
});

map.addLayer(new ImageLayer({
    source: new ImageStatic({
        url: "./back.png",
        imageExtent: extent
    })
}))

// 创建一个用于放置活动图标的layer
var activityLayer = new VectorLayer({
    source: new VectorSource()
});
// 创建一个活动图标需要的Feature，并设置位置
var activity = new Feature({
    geometry: new Point([center[0]- 550*1000/2 + 390 * 1000, center[1]-344*1000/2 + (344 - 145) * 1000])
})
// 设置Feature的样式，使用小旗子图标
activity.setStyle(new Style({
    image: new Icon({
        src: './person.png',
        anchor: [0, 1],
        scale: 0.2
    })
}));

// 添加活动Feature到layer上，并把layer添加到地图中
activityLayer.getSource().addFeature(activity);
map.addLayer(activityLayer);