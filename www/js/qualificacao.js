$(document).ready(function () {

     localStorage.setItem("cpf", JSON.stringify("04015143078"));
     let cpf = localStorage.getItem("cpf");


  $(document).on('click', '#btEnviarQuali', function(){

          var qualificacoes = getSelectedAtuation();

          console.log("qualificações = "+qualificacoes);

          if(qualificacoes.length==0){
                location.href = 'qualificacao.html';
        }else{
          console.log("entro no else ");
                post('api/usuarios/qualificacoes?cpf='+ cpf, qualificacoes )
               .then(function () {
                    location.href = 'cadConcluido.html';
                  });
        }
  });



function getSelectedAtuation(){

  let qualificacoes = $("#areasAtuacao").val();

  if(qualificacoes.length == 0)
    alert("Nenhuma Qualificação Selecionada.");
    return qualificacoes;
}


  window.onload=function(){
  $(document).ready(function() {
      $('select').material_select();
  });
  }


});
