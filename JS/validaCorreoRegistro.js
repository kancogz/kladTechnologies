/*constante para llamar el boton del formulario*/
const btnConfirm=document.querySelector('#btn-confirm')
/*constante debe estar afuera */
const inputEmail=document.querySelector('#input-correo');
const checkEmail=document.querySelector('#input-correo2');

/*Inicio de la funcion para validar */
const ValidateEmail=()=> 
{
                /*este error es para que el sweet alert lo utilice */
    let error = false;
    const mail=document.getElementById('input-correo').value;
    
/*codigo para estandard de formato de correo */
    const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    /*Evalua que el valor sea compatible con el formato solicitado */
    const valido=regex.test(mail);


/*condicion donde evalua espacios vacios Ó si el formato de correo es invalido */
        if(inputEmail.value=='' || valido==false){
                        /*este true es para que el sweet alert lo utilice */
            error=true;
            /*Agrega una clase a un elemento */
            inputEmail.classList.add('error');
        } else{
            error=false;
            /*Eliminar la clase  */
            inputEmail.classList.remove('error');
    
        }

        /*condicion para validar igualdad en escritura de ambos inputs */
        if (inputEmail.value===checkEmail.value) {
            error=false;
            /*Agrega una clase a un elemento */
            checkEmail.classList.remove('error');

            
        } else {
            /*este true es para que el sweet alert lo utilice */
            error=true;
                /*Eliminar la clase  */
                checkEmail.classList.add('error');

            
        }



 
    



  

/*integracion de sweet alert en condiciones.  */
    if (error==true) {
        Swal.fire({
            'icon':'warning',
            'title':'Alert!',
            'text':'Por favor revise los campos resaltados'
        });
    
        
    } else {
       
        Swal.fire({
            'icon':'success',
            'title':'Se ha enviado un correo con su nueva contraseña',
            'text':'felicidades'
        });
       
      
 
    }

  

};

btnConfirm.addEventListener('click', ValidateEmail);