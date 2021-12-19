'use strict';

const registrarDatos = async(pdatos, pendPoint) => {

    let url = `http://localhost:3000/api${pendPoint}`;

    await axios({
        method : 'post',
        url : url,
        data : pdatos
    });
};

const modificarDatos = async(pdatos, pendPoint, pUrlRedireccion) => {

    let url = `http://localhost:3000/api${pendPoint}`;

    await axios({
        method : 'put',
        url : url,
        data : pdatos
    });

}