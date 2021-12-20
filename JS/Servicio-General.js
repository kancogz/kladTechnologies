'use strict';

const registrarDatos = async(pdatos, pendPoint) => {

    let url = `http://localhost:3000/api${pendPoint}`;

    await axios({
        method : 'post',
        url : url,
        data : pdatos
    });
};

const obtenerUsuario = async(pdatos, pendPoint) => {
    let url = `http://localhost:3000/api${pendPoint}`;

    let peticion = await axios({
        method : 'post',
        url : url,
        data : pdatos
    });
};

const validarSesion = async(pdatos, pendPoint) => {
    let url = `http://localhost:3000/api${pendPoint}`;
    let respuesta = false;

    let peticion = await axios({
        method : 'post',
        url : url,
        data : pdatos
    });

    if (peticion.data.success) {
        respuesta = peticion.data.success;
        sessionStorage.setItem('conectado', peticion.data.success);
        sessionStorage.setItem('usuarioConectado', peticion.data.usuario.correo);
        sessionStorage.setItem('usuarioDatos', JSON.stringify(peticion.data));
        sessionStorage.setItem('rolUsuario', peticion.data.usuario.rol);
    }else{
        respuesta = peticion.data.success;
    }

    return respuesta;
};

const modificarDatos = async(pdatos, pendPoint, pUrlRedireccion) => {

    let url = `http://localhost:3000/api${pendPoint}`;

    await axios({
        method : 'put',
        url : url,
        data : pdatos
    });

}