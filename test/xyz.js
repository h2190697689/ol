import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";

export function getBaiduMap(){
    var baiduMapLayer = new Tile({
        source: new XYZ({
            tilePixelRatio: 2,
            tileUrlFunction: function(tileCoord){  // 参数tileCoord为瓦片坐标
                var z = tileCoord[0];
                var x = tileCoord[1];
                var y = tileCoord[2];

                // 计算当前层级下瓦片总数的一半，用于定位整个地图的中心点
                var halfTileNum = Math.pow(2, z-1);
                // 原点移到中心点后，计算xy方向上新的坐标位置
                var baiduX =  x - halfTileNum;
                var baiduY =  y + halfTileNum;

                // 百度瓦片服务url将负数使用M前缀来标识
                if (baiduX < 0) {
                    baiduX = 'M' + (-baiduX);
                }
                if (baiduY < 0) {
                    baiduY = 'M' + (-baiduY);
                }

                // 返回经过转换后，对应于百度在线瓦片的url
                return 'http://online2.map.bdimg.com/onlinelabel/?qt=tile&x=' + baiduX + '&y=' + baiduY + '&z=' + z + '&styles=pl&udt=20160321&scaler=2&p=0';
                }
        })
    })

    var map = new Map({
        layers: [baiduMapLayer],
        view: new View({
            center: [120,30],
            projection: "EPSG:4326",
            zoom: 8
        }),
        target: "map"
    })
} 