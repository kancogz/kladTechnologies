'use strict';

const botonIngresar = document.querySelector('#Confirmarbtn');



const validar = () => {

   let error =false;
   let inputsRequeridos = document.querySelectorAll('input:required');

   inputsRequeridos.forEach(input=> {

   if (input.value == '' ) {
       error = true;
       input.classList.add('error');
       
    
   } else {
    input.classList.remove('error');
    
   }

   });

   if (error == true) {
       Swal.fire({
           'icon': 'warning',
           'title': 'Porfavor ingrese la información de la nueva sala.',
           'text': 'Revise los campos resaltados.',
       });

   }else{
    Swal.fire({
        'icon': 'success',
        'title': 'Se ha registrado la sala correctamente.',
        'text': 'Puede editar la informacíon de esta sala la opción de modíficar sala de cine .',

   });

}   
}




botonIngresar.addEventListener('click',validar);