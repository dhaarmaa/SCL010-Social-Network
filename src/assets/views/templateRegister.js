//vista del registro de usuario
import { templateRegister2 } from './templateRegister2.js'

export const templateRegister = () => {
    const containerRegister = document.createElement('div');
    containerRegister.setAttribute("class","mainClass");
    //escrir html
    const contentRegister = `<h1>Registrar cuenta</h1>
                            <p>Escriba su nombre</p>                            
                            <input class="input" type= "text">
                            <p>Escriba su apellido</p>
                            <input class="input" type= "text">
                            <button class="button" id="back">Volver</button>
                            <button class="button" id="next1">Seguir</button>`

    containerRegister.innerHTML = contentRegister;

    const btn = containerRegister.querySelector('#next1');

    btn.addEventListener('click', () =>{
        templateRegister2();
        window.location.hash = '#/register2';
    })
    
return containerRegister;
}

// const createAccount = () => {
//     console.log("Create account");
//   }
  
//   export const templateCreate = () => {
//     // creamos div que contendrá la plantilla
//     const containerCreate = document.createElement('div');
//     // creamos el contenido del login
//     const contentCreate = `<p>Crear cuenta</p>
//                           <button id="create">Crear cuenta</button>`;
//     // pasar el contenido al div
//     containerCreate.innerHTML = contentCreate;
//     // le pido que busque el id del boton dentro del div creado
//     const btn = containerCreate.querySelector('#create');
//     // evento del botón que llama a la autentificación de google.
//     btn.addEventListener('click', () => {
//       createAccount();
//     })
//     return containerCreate;
//   }