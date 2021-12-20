'use strict';

const botonIngresar = document.querySelector('#btnGuardarHorarioNuevo');



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
           'title': 'Porfavor ingrese la información del horario.',
           'text': 'Revise los campos resaltados.',
       });

   }else{
    Swal.fire({
        'icon': 'success',
        'title': 'Se ha editado el horario correctamente.',
        'text': 'Puede volver a editar el horario cuando guste .',

   });

}   
}




botonIngresar.addEventListener('click',validar);