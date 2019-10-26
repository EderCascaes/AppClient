$(document).ready(function () {

    $('#selecao').change(function (){
      var select = $(this).val();

          if (select==1) {
                 location.href = 'cadastro2.html';
                console.log(select);
            } else if(select==2) {
          
                console.log(select);
            }else if(select==3) {
                console.log(select);
          }

    });

});
