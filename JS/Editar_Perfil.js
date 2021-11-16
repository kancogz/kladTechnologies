function cambiar (sw) {
    var pic;


    if( sw ==0 ){

        pic= "../Img/avatar1.jpg"
    }

    if( sw ==1 ){

        pic= "../Img/avatar1.jpg"
    }

    if( sw ==2 ){

        pic= "../Img/avatar2.jpg"
    }

    if( sw ==3 ){

        pic= "../Img/avatar3.jpg"
    }

    
    document.getElementById('contenedorfoto').src = pic;
   }


   'use strict';

const botonIngresar = document.querySelector('#btnGuard');



const validar = () => {

   let error =false;
   let inputsRequeridos = document.querySelectorAll('input:required');
   let SelectRequeridos = document.querySelectorAll('select:required');

   inputsRequeridos.forEach(input=> {

   if (input.value == '' ) {
       error = true;
       input.classList.add('input-error');
       
    
   } else {
    input.classList.remove('input-error');
    
   }

   });


   SelectRequeridos.forEach(select=> {

    if (select.value == '' ) {
        error = true;
        select.classList.add('input-error');
        
     
    } else {
        select.classList.remove('input-error');
     
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
        'title': 'Se ha modificado su perfil exitosamente.',
        'text': 'Puede volver a editar el perfil en cualquier momento.',

   });

}   
}




botonIngresar.addEventListener('click',validar);


   

