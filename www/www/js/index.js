$(document).ready(function () {

  var time;
  var i = 0;
  var id = '#imagens'
  // Intervalo em milissegundos (1s == 1000ms)
  var milissegundos = 2000;

  var interval = setInterval(function(){
    i++;
    console.log("valor de  i " +i);
    // Seta o source da nova imagem
    $(id).fadeOut(200, function(){
      $(id).attr('src', 'img/abertura'+i+'.jpeg').delay(100).fadeIn(200);
    });

    if(i >= 4){
      return window.stop(interval);
    }

  }, milissegundos);


  function myStopFunction() {
    clearTimeout(time);
  }


  $(document).on('click', '#token', function(){
    let user = $("#user").val();
    let pass = $("#password").val();

    var usuario = {
      Login: user,
      Senha: pass
    }

    post('api/token/', usuario)
    .then(function (token) {
      localStorage.setItem('token', token);
      location.href = 'procura.html';
      console.log(token);
    });

  });

});

document.addEventListener('deviceready', function () {
  console.log('PRONTO');
});

var app = {

  initialize: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },


  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    // var listeningElement = parentElement.querySelector('.listening');
    //  var receivedElement = parentElement.querySelector('.received');

    //  listeningElement.setAttribute('style', 'display:none;');
    //  receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};
