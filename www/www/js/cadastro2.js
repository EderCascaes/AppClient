$(document).ready(function () {

$(document).on('click', '#btEnviar2', function(){


      let name = $("#name").val();
      let cpf = $("#cpf").val();
      let fone = $("#fone").val();
      let dataNascimento = $("#dataNascimento").val();
      let email = $("#email").val();

      var dadosPessoais = {
        Nome: name,
        Cpf: cpf,
        Telefone : fone,
        DataNascimento: dataNascimento,
        Email : email,
        Senha:'',
        Login:''
      }

     //  post('api/usuarios/user', usuario)
     // .then(function () {
            localStorage.setItem("dadosPessoais", JSON.stringify(dadosPessoais));
            location.href = 'cadastro3.html';
     //    });
    });

});
