    export const templateWall= () => {
    // creamos div que contendrá la plantilla
    const containerWall = document.createElement('div');
    // creamos el contenido del login
    const contentWall = `<h1 id="fullName"></h1>
                        <p id="post">¿Eventos?, cuentanos!</p>
                        <textarea placeholder="escribe algo.." name=""  id="text-post"></textarea>
                        <button  id="toPost" class="button">Publicar</button>
                        <button id="back" class="button">atras</button>
                        <button id="next" class="button">Publicaciones</button>
                        <button id="profile" class="button">Perfil</button>`;
    // pasar el contenido al div
    containerWall.innerHTML = contentWall;
    
    const fullName=containerWall.querySelector('#fullName');
    fullName.innerHTML=sessionStorage.getItem('fullName');

    const btnBack = containerWall.querySelector('#back');
    btnBack.addEventListener('click', () => {
      window.location.hash = '';
    })
   
    return containerWall;
  }
  
