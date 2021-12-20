'use strict';

const botonIngresar = document.querySelector('#btnModificarUsuario');



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
           'title': 'Porfavor ingrese la información correspondiente para actualizar los datos del usuario.',
           'text': 'Revise los campos resaltados.',
       });

   }else{
    Swal.fire({
        'icon': 'success',
        'title': 'Se ha editado la información del usuario correctamente.',
        'text': 'Puede volver a editar los datos del Usuario .',

   });

}   
}




botonIngresar.addEventListener('click',validar);