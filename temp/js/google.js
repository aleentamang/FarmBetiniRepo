// Initialize and add the map
function initMap() {
  // The location of Betini
  var Betini = {lat: 27.983345135290982, lng: 85.20442984315116};
  // The map, centered at Betini
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: Betini});
  // The marker, positioned at Betini
  var marker = new google.maps.Marker({position: Betini, map: map});
}

