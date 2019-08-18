    export const templateWall= () => {
    // creamos div que contendrá la plantilla
    const containerWall = document.createElement('div');
    // creamos el contenido del login
    const contentWall = `<h1 id="fullName"></h1>
                        <p id="post">¿Eventos?, cuentanos!</p>
                        <textarea placeholder="escribe algo.." name=""  id="text-post"></textarea>
                        <button  id="toPost" class="buttonPost">Publicar</button>
                        <button id="back" class="buttonA">atras</button>
                        <button id="next" class="buttonA">Publicaciones</button>
                        <button id="profile" class="buttonA">Perfil</button>`;
    // pasar el contenido al div
    containerWall.innerHTML = contentWall;
    
    const fullName=containerWall.querySelector('#fullName');
    fullName.innerHTML=sessionStorage.getItem('fullName');

    const btnBack = containerWall.querySelector('#back');
    btnBack.addEventListener('click', () => {
      window.location.hash = '';
    });

    const btnToPost = containerWall.querySelector('#toPost');
    btnToPost.addEventListener('click', ()=>{
      let post = document.getElementById('text-post').value;
		  let count = 0;
		  let liked = false;
		  if(document.getElementById('text-post').value === ''|| document.getElementById('text-post').value<2){
			  document.getElementById('post-error').style.display = "block";
			  document.getElementById('post-error').innerHTML = "Publicación debe tener minimo 2 caracteres"
		  }else{
			  document.getElementById('post-error').style.display = "none";
			  createPost(post, count, liked);
		  }
    })
   
    return containerWall;
  }


  
