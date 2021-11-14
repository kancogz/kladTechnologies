'use strict'

const btnConfirmar = document.querySelector('#btn-confirmar')

let inputsRequeridos = document.querySelectorAll('input:required');

const validar = () => {
    let error = false;
    let inputsRequeridos = document.querySelectorAll('input:required');

    inputsRequeridos.forEach(input=>{
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } 
        else {
            input.classList.remove('error');
        }
    });

    /*codigo para sweet alert*/
    if (error == true) {
        Swal.fire({
            'icon':'warning',
            'title':'Ha Ocurrido un Error',
            'text':'Por favor revise los campos resaltados'
        });
    
        
    } else {
       
        Swal.fire({
            'icon':'success',
            'title':'Datos añadidos exitosamente!',
            'text':'Los datos han sido añadidos al sistema con éxito.'
        });
       
      
    
    }
    /* termina swal */
}

btnConfirmar.addEventListener('click', validar );