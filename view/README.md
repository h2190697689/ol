# 视图层操作

var map = new ol.Map({});

var view = map.getView();   // view视图
var mapCenter = view.getCenter(); // 获取中心值
mapCenter[0] += 5000;  
view.setCenter(mapCenter);  // 重置中心点
map.render();   // 重新渲染地图
view.setZoom(view.getZoom() + 1);  // 增大地图
map.removeLayer(map.getLayers().item(0));  // 移除图层
map.addLayer(bingMapLayer); // 添加图层