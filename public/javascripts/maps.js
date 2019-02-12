const lat=40.4167
const lng=-3.7042


  function startMap() 
{
  const madridCentro = 
  {
    lat: 40.4167,
    lng: -3.7042
  };



   map = new google.maps.Map(document.getElementById('map'),
  {
    zoom: 15,
    center: madridCentro
  });

  drawMarker(lat,lng)
}



startMap();


function drawMarker(lat,lng){
    const myMarker = new google.maps.Marker(
        {
        position: {
            lat: lat,
          lng: lng
        },
        map: map,
        title: "I'm here"
      });
}

map.addListener('click', function (e) {
    new google.maps.Marker({
      map: map,
      position: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
    })
})