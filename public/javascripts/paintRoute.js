var beg = window.markBeg;
var end = window.markEnd;
var dirService = new google.maps.DirectionsService();
var dirDisplay = new google.maps.DirectionsRenderer();
var waypts1 = [];
// debugger;

// var map = new google.maps.Map(document.getElementById('map'),
//   {
//     zoom: 10,
// 	center: {lat:40, lng:0}
//   }); 

    dirDisplay.setMap(map);
    drawRoute(dirService, dirDisplay);




function drawRoute(dirService, dirDisplay) {
  dirService.route(
    {
      origin: beg,
      destination: end,
      waypoints: waypts1,
      optimizeWaypoints: true,
      travelMode: "BICYCLING"
    },
    function(response, status) {
      if (status === "OK") {
        dirDisplay.setDirections(response);
        console.log(dirService);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}


