'use strict'

const btnConfirmar = document.querySelector('#filter-btn')

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
            'title':'Ha ocurrido un error',
            'text':'Por favor revise los campos resaltados'
        });
    
        
    }
    /* termina swal */
}

btnConfirmar.addEventListener('click', validar );