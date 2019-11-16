$(document).ready(function () {

let check = "";
  $(function(){


      $('input.check').click(function(){
         if($(this).is(":checked")){
           $('input.check').attr('disabled',true);

            $(this).removeAttr('disabled');
         }else{
            $('input.check').removeAttr('disabled');
         }

      })

   })


  $(document).on('click', '#btEnviarQuali', function(){

    $.each($("input[name='qualificacao']:checked"), function(){
      check =($(this).val());
    });
    alert(check);



// $("input[name='qualificacao[]']:checked").each(function ()
// {
//    // valores inteiros usa-se parseInt
//    qualificacoes.push(parseInt($(this).val()));
//    // string
// //   qualificacoes.push( $(this).val());
// });

  //   var id =  window.localStorage.getItem('idCadastro');
  //   //  if(qualificacoes == null || qualificacoes.length == 0){
  //   if(1!=1){
  //     //    alert("qualificações = "+ qualificacoes);
  //     alert("Defina pelo menos uma áera de atuação");
  //     location.href = 'qualificacao.html';
  //   }else{
  //     alert("entro no else ");
  //
  //     var ReqQualificacao ={
  //       Id: id,
  //       Qualificacoes : qualificacoes
  //     }
  //
  //     post('usuario/qualificacoes', ReqQualificacao )
  //     .then(function () {
  //       location.href = 'fimCadastro.html';
  //     });
  //   }
  });



});
