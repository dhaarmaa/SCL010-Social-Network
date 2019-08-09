   
   const createAccount = () => {
    console.log("Create wall");
  }
  
  
  export const templateWall= () => {
    // creamos div que contendrá la plantilla
    const containerWall = document.createElement('div');
    // creamos el contenido del login
    const contentWall = `< <input id="name" type="text">
    <p>AQUI SE MOSTRARA EL MURO</p>
    <button id="back">atras</button>
    <button id="next">adelante</button>`;
    // pasar el contenido al div
    containerWall.innerHTML = contentWall;

    const btnBack = containerWall.querySelector('#back');
    btnBack.addEventListener('click', () => {
      window.location.hash = '';
    })
   
    return containerWall;
  }
  
