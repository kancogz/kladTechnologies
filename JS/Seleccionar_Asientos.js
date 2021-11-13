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
           'title': 'Porfavor Ingrese la informacion del Asiento a Seleccionar.',
           'text': 'Revise los campos resaltados.',
       });

   }else{
    Swal.fire({
        'icon': 'success',
        'title': 'Se ha seleccionado su Asiento exitosamente.',
        'text': 'Puede observar el confirmante de reservación en las opciones de su cuenta .',

   });

}   
}




botonIngresar.addEventListener('click',validar);