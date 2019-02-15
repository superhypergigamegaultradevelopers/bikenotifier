


let madrid = {lat: 40.4078219,lng: -3.7011745};  

  
function startMap() 
{ 
  map = new google.maps.Map(document.getElementById('map'),
  {
    zoom: 14,
    center: madrid
  }); 
}


