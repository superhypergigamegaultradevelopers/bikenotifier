var repoSpots=[]
var dirService = new google.maps.DirectionsService;
var dirDisplay = new google.maps.DirectionsRenderer;
var pointer = [];



function repoRuter(){

    map.addListener('click', function (e)
    {
      new google.maps.Marker(
      {
        map: map,
        position:{lat: e.latLng.lat(),lng: e.latLng.lng()}
      })
        
      var repo=e.latLng.lat()
      var repo3=e.latLng.lng()
    
     
      document.querySelector("#repos").value=repo
      document.querySelector("#repos3").value=repo3
    
    
    repoSpots.push({lat:repo,lng:repo3})
    
     
    dirDisplay.setMap(map);
      
    })
    
   
}
    
