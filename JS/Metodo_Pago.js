const petsData = [
    {
      name: "Luis Picado",
      ExpYear: "10/2023",
      digitos: "2350",
      photo: '../img/cc.jpg',
      tarjeta: "../img/Mc.jpg"
    },

    {
        name: "Carlos Benjamin",
        ExpYear: "10/2027",
        digitos: "4850",
        photo: '../img/cc.jpg',
        tarjeta: "../img/visa.png"
    },
    {
        name: "Luis Picado",
        ExpYear: "10/2023",
        digitos: "2350",
        photo: '../img/cc.jpg',
        tarjeta: "../img/Mc.jpg"
    }
  ];
  

  
  function petTemplate(pet) {
    return `
      <div class="Tarjetas">
      <img class="photo" src="${pet.photo}">

      <div class="contenido">
      <div class="titulo"> <h2 class="pet-name">${pet.name} </h2> </div>

      <p><strong>4 Últimos dígitos:</strong> ${pet.digitos}</p>
      <p><strong>Expiración:</strong> ${pet.ExpYear}</p>

      <div class="logo-marca" id="logo-marca">
      <img src=${pet.tarjeta} alt=""> 
       </div>

      <button type="submit" class="ButtonLightBg" id= "btn-enviar">Eliminar</button>

      <button type="submit" class="ButtonLightBg" id= "btn-enviar" "> <a href="/Html/Metodo_Pago_Agregar.html">Editar</a></button>
     

      </div>
       
    
      </div>
    `;
  }
  
  document.getElementById("app").innerHTML = `
    <h1 class="app-title">Métodos de pago (${petsData.length} resultados)</h1>
    ${petsData.map(petTemplate).join("")}
    
  `;
  
