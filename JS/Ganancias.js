'use strict'

const divGrafico=document.querySelector('#GraficoCine');




const data = {
    labels: ['Cinemark', 'Cinepolis', 'CinePlus', 'CCM'],
    datasets: [{
      label: 'Ganancias Totales',
      data: [2800000 , 3598752, 1235462, 2526520],
      backgroundColor: [
        '#487eb0',
        '#fbc531',
        '#e84118',
        '#00a8ff',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        '#487eb0',
        '#fbc531',
        '#e84118',
        '#00a8ff',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
    }]
  };

  // config 
  const config = {
    type: 'bar',
    data,
    options: {
        indexAxis:'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

const GraficoCine = new Chart(divGrafico,config)



