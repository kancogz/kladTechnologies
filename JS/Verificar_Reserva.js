'use strict';

const botonIngresar = document.querySelector('.ConfirmButton');



const validar = () => {

   let error =false;
   let selectRequeridos=document.querySelectorAll('select:required');

 
    selectRequeridos.forEach(select=>{
        if(select.value==''){ 
        error=true;
        select.classList.add('error');
         }
        else{
            select.classList.remove('error');
        }
    });

   if (error == true) {
       Swal.fire({
           'icon': 'warning',
           'title': 'Por favor Ingrese los datos necesarios.',
           'text': 'Revise los campos resaltados.',
       });

   }else{
    Swal.fire({
        'icon': 'success',
        'title': 'Se ha realizado su compra correctamente.',
        'text': 'Puedes ver los datos de tu reservación desde tu cuenta.',

   });

}   
}




botonIngresar.addEventListener('click',validar);