'use strict'

const botonabrirseleccion=document.querySelector('#btnSelecAsientosFunc');

const ContainerCine=document.querySelector('.GraficoSala');
const asientos =document.querySelectorAll('.row .asientos:not(occupied)');

const count =document.querySelector('#asientos #count');
const maincount=document.querySelector('#precioTotal .count');




function updateSelectedAsientos(){
    const selectedAsientos= document.querySelectorAll('.row .asientos.selected');

   const asientosIndex = [...selectedAsientos].map(function(asiento){
        return [...asientos].indexOf(asiento);
    });
    
    localStorage.setItem('selectedAsientos', JSON.stringify(asientosIndex));



    count.value=asientosIndex;


}


ContainerCine.addEventListener('click', (e) => {

    if (e.target.classList.contains('asientos') && !e.target.classList.contains('occupied')) {
        
        e.target.classList.toggle('selected');
        
    }

    updateSelectedAsientos();

});



const popup =()=>{

    document.querySelector('.main-container').style.visibility='hidden';
    document.querySelector('.main-container2').style.visibility='visible';



}


const popout =()=>{

    document.querySelector('.main-container').style.visibility='visible';
    document.querySelector('.main-container2').style.visibility='hidden';



}


