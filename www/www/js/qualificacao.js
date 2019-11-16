$(document).ready(function () {


    var qualificacoes = new Array();
  //     localStorage.setItem("cpf", JSON.stringify("04015143078"));
  //   let cpf = localStorage.getItem("cpf");

  // $(document).ready(function() {
  //      $(".filled-in").click(function(e) {
  //          var checados = [];
  //          $.each($("input[name='qualificacao[]']:checked"), function(){
  //              checados.push($(this).val());
  //          });
  //          console.log(checados.join(", "));
  //      });
  //  });

  function ckeck(){
    var i = 0;
    $(".filled-in").click(function(e) {

      $.each($("input[name='qualificacao[]']:checked"), function(){
        qualificacoes.push($(this).val());
      });
      console.log(qualificacoes.join(", "));
      console.log("checked"+ i + "=" + qualificacoes.join(", "));
    });
    return checados;
  }


  $(document).on('click', '#btEnviarQuali', function(){
    alert("foi");

    // qualificacoes = ckeck();
    // var qualificacoes = {
    //   id : window.localStorage.getItem('idCadastro');
    // }

    //   for (let i = 0; i < checados.length; ++i) {
    //   console.log(checados[i]);
    //   qualificacoes[i] = checados[i];
    // }

    //
    // var i = 0;
    // $(".filled-in").click(function(e) {
    //
    //   $.each($("input[name='qualificacao[]']:checked"), function(){
    //     qualificacoes.push($(this).val());
    //   });
    //       console.log(qualificacoes.join(", "));
    //       console.log("checked"+ i + "=" + qualificacoes.join(", "));
    //   i++;
    // });

$("input[name='qualificacao[]']:checked").each(function ()
{
   // valores inteiros usa-se parseInt
   qualificacoes.push(parseInt($(this).val()));
   // string
//   qualificacoes.push( $(this).val());
});

    var id =  window.localStorage.getItem('idCadastro');
    //  if(qualificacoes == null || qualificacoes.length == 0){
    if(1!=1){
      //    alert("qualificações = "+ qualificacoes);
      alert("Defina pelo menos uma áera de atuação");
      location.href = 'qualificacao.html';
    }else{
      alert("entro no else ");

      var ReqQualificacao ={
        Id: id,
        Qualificacoes : qualificacoes
      }

      post('usuario/qualificacoes', ReqQualificacao )
      .then(function () {
        location.href = 'fimCadastro.html';
      });
    }
  });

  //
  //
  // function getSelectedAtuation(){
  //
  //    qualificacoes = $("#areasAtuacao").val();
  //
  //   if(qualificacoes == null || qualificacoes.length == 0)
  //     alert("Nenhuma Qualificação Selecionada.");
  //     return qualificacoes;
  // }
  //
  //
  //   window.onload=function(){
  //       $(document).ready(function() {
  //       $('select').material_select();
  //   });
  //   }


});
