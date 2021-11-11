'use strict'

const divGrafico2=document.querySelector('#GraficoPeliculas');


const data2 = {
    labels: ['Venom', 'HarryPotter', 'Cruela'],
    datasets: [{
      label: 'Ganancias Totales',
      data: [322484 , 154120, 255986],
      backgroundColor: [
        '#487eb0',
        '#fbc531',
        '#e84118',
     
      ],
      borderColor: [
        '#487eb0',
        '#fbc531',
        '#e84118',
      
      ],
      borderWidth: 1
    }]
  };

  // config 
  const config2 = {
    type: 'bar',
    data: data2,
    options: {
        indexAxis:'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

const GraficoPeliculas = new Chart(divGrafico2,config2)