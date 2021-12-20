'use strict';

let data = JSON.parse(sessionStorage.getItem('usuarioDatos'));
console.log(data);
let id = data.usuario._id;
document.querySelector('#titulo1 h1').innerHTML = "Hola, " + data.usuario.nombre;
document.getElementById('Input-Nombre').value = data.usuario.nombre;
document.getElementById('Input-Apellidos').value = data.usuario.apellidos;
document.getElementById('input-correo').value = data.usuario.correo;
document.querySelector('#input-id').value = data.usuario.tipoId;
document.getElementById('Input-Numero-Id').value = data.usuario.numeroId;
let rol = data.usuario.rol;

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

    
    let inputFoto = document.getElementById('contenedorfoto').src = pic;
   }

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

   if (!error) {
       let usuario = {
           _id : id,
           foto : '',
           nombre : document.getElementById('Input-Nombre').value,
           apellidos : document.getElementById('Input-Apellidos').value,
           correo : document.getElementById('input-correo').value,
           tipoId : document.querySelector('#input-id').value,
           numeroId : document.getElementById('Input-Numero-Id').value,
           contrasena : document.getElementById('input-contrasena').value,
           rol : rol
       }

       modificarDatos(usuario, '/actualizar-usuario');
   }

}   
}




botonIngresar.addEventListener('click',validar);


   

