//vista del registro de usuario
import { templateRegister2 } from './templateRegister2.js'

export const templateRegister = () => {
    const containerRegister = document.createElement('div');
    //escrir html
    const contentRegister = `<h1>REGISTRAR cuenta</h1>
                            <p>Escriba su nombre</p>                            
                            <input type= "text">
                            <p>escriba su apellido</p>
                            <input type= "text">
                            <button id="back">atras</button>
                            <button id="next1">adelante</button>`

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