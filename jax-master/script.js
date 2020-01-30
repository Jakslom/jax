
require(["esri/Map", "esri/views/MapView"],
    function(Map,MapView){
        let mapp = new Map({basemap:"topo"});
        let map1 = new Map ({basemap:"satellite"});
        let map2 = new Map ({basemap:"osm"})
        let button1 = document.getElementById("bt1")
        let button2 = document.getElementById("bt2");
        let button3 = document.getElementById("bt3");

        let mapContainer = new MapView({
            container: "widok",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
            map: mapp , //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
            zoom: 6,
            center: [52,52.61]

        })

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