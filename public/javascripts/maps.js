//const marks = require('../../models/marks.js')


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
let count=0
let locate=[]
map.addListener('click', function (e) {
    new google.maps.Marker({
      map: map,
      position: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
        
      }
      
    })
    count++
    var location=e.latLng.lat()//lng:${e.latLng.lng()}}`
    var location3=e.latLng.lng()//lng:${e.latLng.lng()}}`

   //console.log(location,'<<<<<<',count)

   // location.push({ lat: lat, lng: lng, name: `marks: ${count}` });
    document.querySelector("#marks").value=location
    document.querySelector("#marks3").value=location3

    // console.log(location)
    // locate.push({
    //     location: new google.maps.LatLng(lat, lng)
    //     //stopover: true
    // });
    console.log('locate es:',location)
})


// map.addListener('click', function (e) {

// marks(e.latLng.lat(),e.latLng.lng())

// })

