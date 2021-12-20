'use strict';

const enlaces = document.querySelectorAll('#nav_principal a');
const btnCerrarSesion = document.querySelector('#btnCerrarSesion');

let conectado = sessionStorage.getItem('conectado');
let rolUsuario = sessionStorage.getItem('rolUsuario');

if (conectado) {
    console.log(rolUsuario)
    switch(rolUsuario){
        case "1": //Usuario
            console.log(enlaces[4].href)
            // enlaces[4].classList.add('ocultar');
        break;
        case "2": //Soporte

        break;

        case "3": //Administrador

        break;
    }
}else{
    enlaces[4].classList.add('ocultar');
    enlaces[1].classList.add('ocultar');
    enlaces[5].classList.add('ocultar');
}

const cerrarSesion = () =>{
    sessionStorage.clear();
    window.location.href = '/Html/Iniciar_Sesion.html';
};

btnCerrarSesion.addEventListener('click', cerrarSesion);