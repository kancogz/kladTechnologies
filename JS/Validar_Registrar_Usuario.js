'use strict'

const inputNombre = document.querySelector('#Input-Nombre');
const inputApellidos = document.querySelector('#Input-Apellidos');
const inputId = document.querySelector('#input-id');
const InputNumeroId = document.querySelector('#Input-Numero-Id');

const btnConfirm= document.querySelector('#btn-confirm');/* 

const inputEmail=document.querySelector('#input-correo'); */
let inputRequeridos=document.querySelectorAll('input:required');
const inputEmail=document.querySelector('#input-correo');

/*funcion para evitar que el label baje cuando tenga texto en el input del email. */
const labelFunction=()=>{
    inputEmail.classList.add('errorEmail')}


const validar =()=>{
    let error=false;
    let inputRequeridos=document.querySelectorAll('input:required');
    let selectRequeridos=document.querySelectorAll('select:required')
    
    const mail=document.getElementById('input-correo').value;
    const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    const valido=regex.test(mail);

    /*para todos los inputs */
    inputRequeridos.forEach(input=>{
        if (input.value==''){
            console.log('un texto')
            error=true;
            input.classList.add('error');
        }else {
            input.classList.remove('error');
         
        }
    });

    /***fin de inputs */
/*para los select */
    selectRequeridos.forEach(select=>{
        if(select.value==''){ 
        error=true;
        select.classList.add('error');
         }
        else{
            select.classList.remove('error');
        }
    });
    /* fin de select */
    
/*condicion donde evalua espacios vacios Ó si el formato de correo es invalido */
if(inputEmail.value=='' || valido==false){
    /*este true es para que el sweet alert lo utilice */
error=true;
/*Agrega una clase a un elemento */
inputEmail.classList.add('error');
} else{

/*Eliminar la clase en el primer input de correo */
inputEmail.classList.remove('error');


}

    /*codigo para sweet alert*/
    if (error==true) {
        Swal.fire({
            'icon':'warning',
            'title':'¡Ha ocurrido un error!',
            'text':'Por favor revise los campos resaltados.'
        });

    } else {
       
        Swal.fire({
            'icon':'success',
            'title':'¡Registro de usuario completado!',
            'text':'Revise su correo electrónico para confirmar.'
        });
    }
/* termina swal */

    if (!error) {
        let usuario = {
            foto : '',
            nombre : inputNombre.value,
            apellidos : inputApellidos.value,
            correo : inputEmail.value,
            tipoId : inputId.value,
            numeroId : InputNumeroId.value,
            rol : 1
        }

        registrarDatos(usuario, '/registrar-usuario');
    }
 };

/* validar es el nombre de una funcion */
btnConfirm.addEventListener('click', validar );


/* 


const inputNombre= document.querySelector('#Input-Nombre');

inputNombre.addEventListener('keyup',(e)=>{
    let valorInput = e.target.value;

    inputNombre.value=valorInput
   
    .replace(/[0-9]/g, '')

})

const inputApellidos = document.querySelector('#Input-Apellidos');

inputApellidos.addEventListener('keyup',(e)=>{
    let valorInput = e.target.value;

    inputApellidos.value=valorInput
   
    .replace(/[0-9]/g, '')

})

const InputNumeroId = document.querySelector('#Input-Numero-Id');

InputNumeroId.addEventListener('keyup', (e)=>{
    let valorInput = e.target.value;

    InputNumeroId.value=valorInput

    // Eliminar las letras
	.replace(/\D/g, '')
})
    */