$("#cep").focus();

function limpa_formulário_cep() {

  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('uf').value=("");

}

function meu_callback(conteudo) {

  if (!("erro" in conteudo)) {

    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);

  }
  else {

    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}
function pesquisacep(valor) {
  var cep = valor.replace(/\D/g, '');
  if (cep != "") {

    var validacep = /^[0-9]{8}$/;

    if(validacep.test(cep)) {

      document.getElementById('rua').value="...";
      document.getElementById('bairro').value="...";
      document.getElementById('cidade').value="...";
      document.getElementById('uf').value="...";

      var script = document.createElement('script');
      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

      document.body.appendChild(script);
    }
    else {
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  }
  else {
    limpa_formulário_cep();
  }
}


$(document).on('click', '#btEnviar2', function(){

  let cep = $("#cep").val();
  let rua = $("#rua").val();
  let numero = +$("#numero").val();
  let complemento = $("#complemento").val();
  let bairro = $("#bairro").val();
  let cidade = $("#cidade").val();
  let estado = $("#uf").val();
  var cpf = localStorage.getItem("cpf");

  var endereco = {
    Cep : cep,
    Logradouro : rua,
    Numero: numero,
    Complemento : complemento,
    Bairro : bairro,
    Cidade : cidade,
    Estado : estado
  }

  //  post('api/usuarios/address', endereco)
  // .then(function () {
  localStorage.setItem("endereco", JSON.stringify(endereco));
  location.href = 'cadConcluido.html';
  //                });
});
