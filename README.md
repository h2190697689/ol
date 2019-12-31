# ol
- https://www.jianshu.com/p/6785e755fa0d
- http://develop.smaryun.com:81/API/JS/OL3InterfaceDemo/index.htm

# 渲染
# Map

# View
1. center
2. projection: 'EPSG:4326',  (投影坐标)
3. zoom: 10  (展示比例)
4. extent: [102,29,104,31]   (中心范围)
5. minZoom, maxZoom

# layer


# api

## view
1 fit 函数
- view.fit([104, 30.6, 104.12, 30.74], map.getSize())

2 center 中心点
- view = map.getView(),   center = view.getCenter(),   view.setCenter([104,123])   map.render()

3 zoom 展示级别
- zoom = view.getZoom(),   view.setZoom(8);
- setTarget

## layer
1. map.removeLayer(map.getLayers().item[0])
2. map.addLayer(mapLayer)
