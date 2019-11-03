$(document).ready(function(){

  var l = window.localStorage.getItem('usuario');
  var u = window.localStorage.getItem('dadosPessoais');
  var e = window.localStorage.getItem('endereco');

  var log = JSON.parse(l);
  var usu = JSON.parse(u);
  var end = JSON.parse(e);

  var Requisicao = {
    usuario:{
      Senha: log.Senha,
      Login: log.Login,
      Nome: usu.Nome,
      Cpf: usu.Cpf,
      Telefone: usu.Telefone,
      DataNascimento : usu.DataNascimento,
      Email: usu.Email
    },
    endereco:{
      Cep: end.Cep,
      Logradouro: end.Logradouro,
      Numero: end.Numero,
      Complemento: end.Complemento,
      Bairro: end.Bairro,
      Cidade: end.Cidade,
      Estado: end.Estado
    }

  }
  console.log(Requisicao.endereco.Cep);

  var nome = document.getElementById('nome');
  var cpf = document.getElementById('cpf');
  var telefone = document.getElementById('telefone');
  var email = document.getElementById('email');

  var tipoLogradouro = document.getElementById('tipoLogradouro');
  var logradouro = document.getElementById('logradouro');
  var numero = document.getElementById('numero');
  var complemento = document.getElementById('complemento');
  var cep = document.getElementById('cep');
  var bairro = document.getElementById('bairro');
  var cidade = document.getElementById('cidade');
  var estado = document.getElementById('estado');


  nome.innerHTML = "Nome : "+ Requisicao.usuario.Nome;
  cpf.innerHTML = "CPF : " + Requisicao.usuario.Cpf;
  telefone.innerHTML = "Telefone : " + Requisicao.usuario.Telefone;
  email.innerHTML = "E-mail : " + Requisicao.usuario.Email;
  logradouro.innerHTML = "Logradouro: " + Requisicao.endereco.Logradouro;
  numero.innerHTML = "Numero : " + Requisicao.endereco.Numero;
  complemento.innerHTML = "Complemento : " + Requisicao.endereco.Complemento;
  cep.innerHTML = "CEP : "+ Requisicao.endereco.Cep;
  bairro.innerHTML = "bairro : " + Requisicao.endereco.Bairro;
  cidade.innerHTML = "cidade : " + Requisicao.endereco.Cidade;
  estado.innerHTML = "Estado : " + Requisicao.endereco.Estado;


  $(document).on('click', '#btEnviar2', function(){
    post('usuario', Requisicao)
    .then(function (retorno) {

      if(retorno > 0){
        localStorage.setItem("idCadastro", retorno);
        alert("Cadastro realizado com sucesso !!")
      }else{
        alert("Erro na Conclusão do cadastro !!")
        location.href = 'cadConcluido.html';
      }          
      // localStorage.removeItem('endereco');
      // localStorage.removeItem('dadosPessoais');
      // localStorage.removeItem('usuario');
         location.href = 'qualificacao.html';
    });

  });

});
