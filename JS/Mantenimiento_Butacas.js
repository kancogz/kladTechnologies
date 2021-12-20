'use strict';

const botonIngresar = document.querySelector('#btnGuard');



const validar = () => {

   let error =false;
   let inputsRequeridos = document.querySelectorAll('input:required');

   inputsRequeridos.forEach(input=> {

   if (input.value == '' ) {
       error = true;
       input.classList.add('input-error');
       
    
   } else {
    input.classList.remove('input-error');
    
   }

   });

   if (error == true) {
       Swal.fire({
           'icon': 'warning',
           'title': 'Porfavor ingrese la informacion a modificar.',
           'text': 'Revise los campos resaltados.',
       });

   }else{
    Swal.fire({
        'icon': 'success',
        'title': 'Se ha modificado su sala exitosamente.',
        'text': 'Puede volver a editar la Sala en cualquier momento.',

   });

}   
}




botonIngresar.addEventListener('click',validar);