var inicialRoute = "http://localhost:55674/";

function post(route, data){
    return $.ajax({
        url: inicialRoute+route,
        type: "POST",
        headers: {
          //  'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    }).catch(function(err){
      console.log(err);
    });
}

function get(route){
  return $.ajax({
      url: inicialRoute+route,
      type: "GET",
      headers: {

      }
  }).catch(function(err){
    console.log(err);
  });
}

$(function(){
    $(".button-collapse").sideNav();
});
