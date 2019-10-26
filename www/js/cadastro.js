$(document).ready(function () {

  $(document).on('click', '#btEnviar2', function(){

    let senha = $("#password").val();
    let logue = $("#logue").val();
    let confirmar = $("#Confirmar").val();

    if(senha!=confirmar){
      alert("Senhas diferentes");
      let senha = $("#password").val("");
      let confirmar = $("#Confirmar").val("");
      $("#password").focus();
    }else{
      var usuario = {
        Senha: senha,
        Login: logue
      }

      get('usuario?login='+logue )
      .then(function (retorno){
        
        if(retorno === true){
          localStorage.setItem("usuario", JSON.stringify(usuario));
          location.href = 'cadastro2.html';
        }else{
          alert("Loguin já existente");
          location.href = 'cadastro.html';
        }
      });
    }
  });

});
