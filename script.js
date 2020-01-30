
require(["esri/Map", "esri/views/MapView", "esri/WebMap", "esri/widgets/BasemapGallery", "esri/layers/GraphicsLayer","esri/widgets/Sketch","esri/layers/FeatureLayer"],
    function(Map,MapView,WebMap, BasemapGallery,GraphicsLayer,Sketch,FeatureLayer){

        var graphicsLayer = new GraphicsLayer();

        let map4 = new Map({
          basemap: "topo",
          //*** ADD ***//
          
        });
        let mapp = new Map({basemap:"topo"});
        let map1 = new Map ({basemap:"satellite"});
        let map2 = new Map ({basemap:"osm"})
        let map5 = new WebMap({
            portalItem:{
                id:"56d6f7d589a54dcb92e1a301e43864ad"
                
            },layers: [graphicsLayer]
        })
        let button1 = document.getElementById("bt1")
        let button2 = document.getElementById("bt2");
        let button3 = document.getElementById("bt3");

        let mapContainer = new MapView({
            container: "widok",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
            map: map5 , //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
            zoom: 6,
            center: [52,52.61]

        })
        let trailheadsLayer = new FeatureLayer({
            url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0'
          });
    
          map5.add(trailheadsLayer);




        let sketch = new Sketch({
            view: mapContainer,
            layer: graphicsLayer
          });
    
          mapContainer.ui.add(sketch, "bottom-right");


        let basemapGallery = new BasemapGallery({
            view: mapContainer,
            source: {
              portal: {
                url: "https://www.arcgis.com",
                useVectorBasemaps: true  // Load vector tile basemaps
              }
            }
          })
        mapContainer.ui.add(basemapGallery,"top-right")

      

    
          

        button1.addEventListener('click',function(){
            mapContainer.map = map1
            mapContainer.zoom = 5;
             })
        button2.addEventListener('click',function(){
            mapContainer.map = mapp;
            mapContainer.zoom = 5;
             })
        button3.addEventListener('click',function(){
            mapContainer.map = map2;
            mapContainer.zoom = 5;
             })
        
});