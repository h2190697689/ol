var layer = new ol.layer.Vector({
    source: new ol.source.Vector()
})
var feature = new ol.Feature({
    geometry: new ol.geom.Point([104,30])
})
feature.setStyle(new ol.style.Style({
    image: new ol.style.Icon({
        src: "fjdkl.jpg"
    })
}))
layer.getSource().addFeature(feature);


map.on("click", function(event){
      var feature = map.forEachFeatureAtPixel(event.pixel, function(feature){
          return feature;
      });
      if(feature){
        var style = feature.getStyle().getImage();
        feature.setStyle(new ol.style.Style({
            image: new ol.style.RegularShape({
                points: 5,
                radius: 20,
                radius2: 10,
                stroke: style.getStroke(),
                fill: new ol.style.Fill({
                    color: "red"
                })
            })
        }))
      }
})


feature.setStyle(new ol.style.Style({
    text: new ol.style.Text({
        text: "hejiamin",
        fill: new ol.style.Fill({
            color: "red"
        })
    })
}))

anchor.setStyle(function(resolution){
    return [new ol.style.Icon({
        src: "..img/anchor.png",
        scale: map.getView().getZoom() / 10
    })]
})

// 事件监听
map.on("singleclick",function(event){
    console.log(map.getEventCoordinate(event))
})

var key = map.on("singleclick", function(event){
    console.log("事件注销");
    map.unByKey(key)
})

map.once("singleclick",function(event){
    console.log("只使用一次")
})

、、、 常用事件
singleclick  dbclick   click  pointermove(鼠标移动)   pointerdrag   moveend(地图移动)
change:resolution(地图缩放)   change:center(地图中心改变)

、、、自定义事件
map.on("pointermove",function(event){
    map.forEachFeatureAtPixel(event.pixel,function(feature){
        feature.dispatchEvent({
            type: "mousemove",
            event: event
        })
    })
})
feature1.on("mousemove",function(event){
    this.setStyle(new ol.style.Style({
        image: new ol.style.Circle({
            radius: 100,
            file: new ol.style.Fill({
                color: "red"
            })
        })
    }))
})


、、、 内置交互方式
interactions: ol.interaction.defaults(),   // 默认值

var selectSingleClick = new ol.interaction.Select({

})
map.addInteraction(selectSingleClick);
selectSingleClick.on("select",function(event){
    event.selected[0].setStyle(new ol.style.Style({
        image: new ol.style.Circle({
            radius: 10,
            fill: new ol.style.Fill({
                color: "blue"
            })
        })
    }))
})



、、、 选择交互方式
map.addInteraction(new ol.interaction.Select({
    condition: ol.events.condition.pointerMove,
    style: new ol.style.Style({
        image: new ol.style.Circle({
            radius: 10,
            fill: new ol.style.Fill({
                color: "blue"
            })
        })
    }),
    filter: function(feature, layer){
        return layer === circleLayer
    }
}))

//取消选中
var clickSelect = new ol.interaction.Select({
    style: new ol.style.Style({
        image: new ol.style.Circle({
            radius: 10,
            fill: new ol.style.Fill({
                color: "blue"
            })
        })
    })
})
map.addInteraction(clickSelect);
clickSelect.getFeatures().clear();   // 取消选中


、、、 绘制一条线
map.addInteraction(new ol.interaction.Draw({
    type: "LineString"
}))

var lineLayer = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "red",
            size: 1
        })
    })
})
mp2.addLayer(lineLayer);
map2.addInteraction(new ol.interaction.Draw({
    type: "LineString",  // "Point","Polygon", "MultiPoint", "MultiLineString", "MultiPolygon", "Circle"
    source: lineLayer.getSource()  
}))


// 画线事件监听
var lineDraw = new ol.interaction.Draw({
    type: "LineString",
    source: lineLayer.getSource(),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "#009933",
            size: 1
        })
    }),
    maxPoints: 4
});
lineDraw.on("drawend",function(event){
    console.log(event.feature.getGeometry().getCoordinates())
})



、、、 控件(即dom元素)
controls: ol.control.defaults({
    attribution: false,
    rotate: false,
    zoom: false
})

controls: ol.control.defaults().extend([
    new ol.control.FullScreen(),
    new ol.control.MousePosition(),
    new ol.control.OverviewMap(),
    new ol.control.ScaleLine(),
    new ol.control.ZoomSlider(),
    new ol.control.ZoomToExtent()
])

var viewport = map.getViewport();
$(viewport).append("<div id='share' class='share'></div>");


// 不带动画
map.getView().setCenter(ol.proj.transform([104,30],'EPSG:4326', 'EPSG:3857'))
// 带动画
var pan = ol.animation.pan({
    duration: 2000,
    source: map.getView.getCenter()
    easing: ol.easing.easeIn: 加速 
        / ol.easing.easeOut: 减速
        / ol.easing.inAndOut: 先加速再减速
        / ol.easing.linear: 匀速
        / ol.easing.upAndDown
})
map.beforeRender(pan);
map.getView().setCenter(ol.proj.transform([104,30],'EPSG:4326', 'EPSG:3857'))

// postcompose
var radius = 0;
map.on("postcompose",function(){
    radius ++;
    radius = radius % 20;
    circle.setStyle(new ol.style.Style({
        image: new ol.style.Circle({
            radius: radius,
            stroke: new ol.style.Stroke({
                color: "red",
                size: 1
            })
        })
    }))
})

