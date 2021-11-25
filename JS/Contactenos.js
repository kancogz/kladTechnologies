'use strict';

const botonIngresar = document.querySelector('.Confirm');



const validar = () => {

   let error =false;
   let inputsRequeridos = document.querySelectorAll('input:required');
   let mensaje=document.querySelector('#mensaje');

   inputsRequeridos.forEach(input=> {

    if (input.value == '' ) {
        error = true;
        input.classList.add('input-error');
        
     
    } else {
     input.classList.remove('input-error');
     
    }
 
    });

    
   if (mensaje.value == '' ) {
    error = true;
    mensaje.classList.add('input-error');
    
 
} else {
 mensaje.classList.remove('input-error');
 
};



   if (error == true) {
       Swal.fire({
           'icon': 'warning',
           'title': 'Porfavor rellene todos los campos.',
           'text': 'Revise los campos resaltados.',
       });

   }else{
    Swal.fire({
        'icon': 'success',
        'title': 'Se Ha enviado el mensje correctamente.',
        'text': 'Te contactaremos lo antes posible, gracias por usar Tickets+.',

   });

}   
}




botonIngresar.addEventListener('click',validar);



