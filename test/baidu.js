import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import TileGrid from "ol/tilegrid/TileGrid";
import TileImage from "ol/source/TileImage";


export function getBaiduMapSource(){
    // 自定义分辨率和瓦片坐标系
    var resolutions = [];
    var maxZoom = 18;
    // 计算百度使用的分辨率
    for(var i=0; i<=maxZoom; i++){
        resolutions[i] = Math.pow(2, maxZoom-i);
    }
    var tilegrid  = new TileGrid({
        origin: [0,0],    // 设置原点坐标
        resolutions: resolutions    // 设置分辨率
    });
    return new TileImage({
        projection: 'EPSG:3857',    
        tileGrid: tilegrid,
        tileUrlFunction: function(tileCoord, pixelRatio, proj){
            var z = tileCoord[0];
            var x = tileCoord[1];
            var y = tileCoord[2];
  
            // 百度瓦片服务url将负数使用M前缀来标识
            if(x<0){
                x = 'M' + (-x);
            }
            if(y<0){
                y = 'M' + (-y);
            }

            // 计算当前层级下瓦片总数的一半，用于定位整个地图的中心点
            //   var halfTileNum = Math.pow(2, z-1);
            // 原点移到中心点后，计算xy方向上新的坐标位置
            //   var baiduX =  x - halfTileNum;
            //   var baiduY =  y + halfTileNum;

            // 百度瓦片服务url将负数使用M前缀来标识
            //   if (baiduX < 0) {
            //       baiduX = 'M' + (-baiduX);
            //   }
            //   if (baiduY < 0) {
            //       baiduY = 'M' + (-baiduY);
            //   }
  
            return "http://online0.map.bdimg.com/onlinelabel/?qt=tile&x="+x+"&y="+y+"&z="+z+"&styles=pl&udt=20160426&scaler=1&p=0";
        }  
    })
}



export function getBaiduMap(){
    new Map({
        target: "map",
        view: new View({
            // center: [120,30],
            center: ol.proj.transform([104.06, 30.67], 'EPSG:4326', 'EPSG:3857'),
            zoom: 8,
            // projection: 'EPSG:4326'
        }),
        layers: [
            new Tile({
                source: getBaiduMapSource()
            })
        ]
    })
}