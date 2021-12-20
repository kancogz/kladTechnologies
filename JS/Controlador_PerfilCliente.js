'use strict';

if (sessionStorage.getItem('usuarioDatos')) {
    let data = JSON.parse(sessionStorage.getItem('usuarioDatos'));
    console.log(data.usuario.nombre);
    document.getElementById('contenedorfoto').setAttribute('src', data.usuario.foto);
    document.querySelector('#titulo1 h1').innerHTML = "Hola, " + data.usuario.nombre;
    document.getElementById('name').innerHTML = data.usuario.nombre;
    document.getElementById('apellido').innerHTML = data.usuario.apellidos;
    document.getElementById('tipoCedula').innerHTML = data.usuario.tipoId;
    document.getElementById('numeroCedula').innerHTML = data.usuario.numeroId;
    document.getElementById('correo').innerHTML = data.usuario.correo;
}else{
    console.log("No puede ingresar");
}
