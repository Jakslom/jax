
require(["esri/Map", "esri/views/MapView"],
    function(Map,MapView){
        let map1 = new Map({basemap:"topo"});

        let mapContainer = new MapView({
            container: "mapView",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
            map: map1 , //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
            zoom: 4,
            

         }); 

    })
