


let madrid = {lat: 40.4167,lng: -3.542};  

  
function startMap() 
{ 
  map = new google.maps.Map(document.getElementById('map'),
  {
    zoom: 10,
    center: madrid
  }); 
}


