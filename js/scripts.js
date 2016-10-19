
$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(52.3731, 4.8922);

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 13
  };
  
  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker.setMap(map);

};
/* end google maps -----------------------------------------------------*/


$("#slider").slider({ id: "slider", tooltip: "hide", max: 1000, range: true, value: [100, 500], });
$("#slider").on("slide", function(slideEvt) {
  $("#slider_val").text(slideEvt.value[0]+"-"+slideEvt.value[1]);
});

});