'use strict'

const inputNombre = document.querySelector('#input-nombre');
const inputCategoria = document.querySelector('#input-categoria');
const inputDuracion = document.querySelector('#input-duracion');
const inputClasificacion = document.querySelector('#input-clasificacion');
const inputTipo = document.querySelector('#input-tipo');
const inputCine = document.querySelector('#input-cine');
const inputFoto = document.querySelector('#input-foto');
const inputSinopsis = document.querySelector('#sinopsis-textarea');
const btnConfirmar = document.querySelector('#btn-confirmar');

let inputsRequeridos = document.querySelectorAll('input:required');
let textareaRequeridos = document.querySelectorAll('textarea:required');

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

    textareaRequeridos.forEach(input=>{
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
            'text':'Por favor revise los campos resaltados.'
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
        let pelicula = {
            foto : inputFoto.getAttribute('name'),
            nombre : inputNombre.value,
            categoria : inputCategoria.value,
            duracion : inputDuracion.value,
            clasificacion : inputClasificacion.value,
            tipo : inputTipo.value,
            cine : inputCine.value,
            sinopsis : inputSinopsis.value
        }

        registrarDatos(pelicula, '/registrar-pelicula');
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