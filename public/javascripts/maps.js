const center= {lat: 40.4167,lng: -3.7042}
const lat=40.4167
const lng=-3.7042
let waypts=[]
var dirService = new google.maps.DirectionsService;
var dirDisplay = new google.maps.DirectionsRenderer;
const madridCentro = {lat: 40.6167,lng: -3.842};  
var pointer = [];
  
function startMap() 
{ 
  map = new google.maps.Map(document.getElementById('map'),
  {
    zoom: 10,
    center: center
  }); 
}

startMap();

map.addListener('click', function (e)
{
  new google.maps.Marker(
  {
    map: map,
    position:{lat: e.latLng.lat(),lng: e.latLng.lng()}
  })
    
  var location=e.latLng.lat()
  var location3=e.latLng.lng()

  document.querySelector("#marks").value=location
  document.querySelector("#marks3").value=location3

  if(pointer.length<2)
  {pointer.push({lat:location,lng:location3})}

  waypts.push(
  {
    location: {lat:location,lng:location3},
    stopover: true
  });

  drawRoute(dirService, dirDisplay);
})

dirDisplay.setMap(map);

function drawRoute(dirService, dirDisplay)
{
  if(pointer.length > 1) 
  {
    dirService.route(
    {
      origin:pointer[0],
      destination: pointer[1],
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'BICYCLING'
    },
   function (response, status)
    {
      if (status === 'OK') 
      {
        dirDisplay.setDirections(response);
      } else 
      {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
  
