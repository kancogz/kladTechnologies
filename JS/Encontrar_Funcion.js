'use strict';

const botonIngresar = document.querySelector('#btnVerCompEncFunc');



const validar = () => {

   let error =false;
   let inputsRequeridos = document.querySelectorAll('input:required');

   inputsRequeridos.forEach(input=> {

   if (input.value == '' ) {
       error = true;
       /*se reemplaza input-error po solamente error */
       input.classList.add('error');
       
    
   } else {
       
       /*se reemplaza input-error po solamente error */
    input.classList.remove('error');
    
   }

   });

   if (error == true) {
       Swal.fire({
           'icon': 'warning',
           'title': 'Porfavor Ingrese la información necesaria para verificar su compra.',
           'text': 'Revise los campos resaltados.',
       });

   }else{
    Swal.fire({
        'icon': 'success',
        'title': 'Se ha seleccionado su función.',
        'text': 'A continuación verá los detalles de su funcion.',

   });

}   
}




botonIngresar.addEventListener('click',validar);