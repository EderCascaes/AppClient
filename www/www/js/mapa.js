
function carregarPontos() {
  let lat = -19.212355602107472;
  let lon = -44.20234468749999;


  var pontos = {
    Latitude : lat,
    Longitude : lon
  }
  function(pontos) {

    $.each(pontos, function(index, ponto) {

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
        console.log(ponto.Latitude);
        title: "Meu ponto personalizado! :-D",
        map: map
      });

    });

  });

}
carregarPontos();

var marker = new google.maps.Marker({
  position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
  title: "Meu ponto personalizado! :-D",
  map: map,
  icon: 'img/marcador.png'
});


var marker = new google.maps.Marker({...

  var infowindow = new google.maps.InfoWindow(), marker;

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent("Conteúdo do marcador.");
      infowindow.open(map, marker);
    }
  })(marker))
