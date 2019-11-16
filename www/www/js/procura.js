$(document).ready(function () {

  $("#nome").focus();


  $(document).on('click', '#btEnviar2', function(){

    let nome = $("#nome").val();
    let fone = $("#fone").val();
    let cep = $("#cep").val();

    let usuario = {
      nome : nome,
      fone : fone,
      cep : cep
    }

    // post('usuario', Requisicao)
    // .then(function (retorno) {
    if(isEmpty(nome) || isEmpty(fone) || isEmpty(cep))
    {
      alert("Preencha todos os campos");
      return  ((isEmpty(nome)) ? $("#nome").focus() : (isEmpty(fone)) ? $("#fone").focus() : $("#cep").focus());
    }

    localStorage.clear();
    localStorage.setItem("usuarioProc", JSON.stringify(usuario));
    // localStorage.setItem("fone", fone);
    // localStorage.setItem("cep", cep);
   location.href = "qualiProcura.html" ;
  });

});



//
// $('#selecao').change(function (){
//   var select = $(this).val();
//
//       if (select==1) {
//              location.href = 'cadastro2.html';
//             console.log(select);
//         } else if(select==2) {
//
//             console.log(select);
//         }else if(select==3) {
//             console.log(select);
//       }
//
// });
