function initMap() {
  var uluru = {lat: 19.0425702, lng: 73.023008};
  var map = new google.maps.Map(document.getElementById('chartdiv'), {
      zoom: 15,
      center: uluru
    });
  var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}
