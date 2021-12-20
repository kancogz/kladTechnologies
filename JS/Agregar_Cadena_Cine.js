'use strict'

const inputNombre = document.querySelector('#input-nombre');
const inputUbicacion = document.querySelector('#input-ubicacion');
const inputCodigo = document.querySelector('#input-codigo');
const inputFoto = document.querySelector('#input-foto');

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
            'title':'Ha ocurrido un error',
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

    if (!error) {
        let cine = {
            foto : inputFoto.getAttribute('name'),
            nombre : inputNombre.value,
            ubicacion : inputUbicacion.value,
            codigo : inputCodigo.value
        }

        registrarDatos(cine, '/registrar-cine');
    }
};

const subirFoto = () => {
    let myWidget = cloudinary.createUploadWidget({
        cloudName: 'dch64xl08', 
        uploadPreset: 'fotos_cine'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            console.log('La imagen ha sido subida con éxito: ', result.info.url); //Mensaje de consola para verificación de URL de la imagen creada
            inputFoto.setAttribute('name', result.info.url);
            // previewFoto.setAttribute('src', result.info.url);
          }
        }
      )
      
    myWidget.open();
 };

btnConfirmar.addEventListener('click', validar );
inputFoto.addEventListener('click', subirFoto);