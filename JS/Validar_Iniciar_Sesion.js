'use strict'
const btnConfirm= document.querySelector('#btn-confirm');
const inputEmail=document.querySelector('#input-correo');
let inputRequeridos=document.querySelectorAll('input:required');


const labelFunction=()=>{
    inputEmail.classList.add('errorEmail')
    /*esta funcion se encuentra en generalcss */
}

const validar =()=>{
    let error=false;
    let inputRequeridos=document.querySelectorAll('input:required');

    const mail=document.getElementById('input-correo').value;
    const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    const valido=regex.test(mail);

     /*para todos los inputs */
     inputRequeridos.forEach(input=>{
        if (input.value==''){
       
            error=true;
            input.classList.add('error');
        }else {
            input.classList.remove('error');
        }
    });


    /***fin de inputs */

        
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
        'title':'Ha Ocurrido un Error',
        'text':'Por favor revise los campos resaltados'
    });

    
} else {
   
    Swal.fire({
        'icon':'success',
        'title':'Ha Ingresado con Exito'
       
    });
   
  

}
/* termina swal */




};






/* validar es el nombre de una funcion */
btnConfirm.addEventListener('click', validar );


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#Password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});