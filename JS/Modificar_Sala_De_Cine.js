'use strict';

const botonIngresar = document.querySelector('#btnConfirmarSala');



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
           'title': 'Porfavor ingrese la información necesaria para actualizar la Sala.',
           'text': 'Revise los campos resaltados.',
       });

   }else{
    Swal.fire({
        'icon': 'success',
        'title': 'Se ha actualizado la sala correctamente.',
        'text': 'Verá reflejados los cambios en la sala una vez continue.',

   });

}   
}




botonIngresar.addEventListener('click',validar);