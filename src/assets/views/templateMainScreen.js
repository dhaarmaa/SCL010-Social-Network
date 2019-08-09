import { loginGoogle } from './../js/auth.js';
import { templateLogin } from "./templateLogin.js";
import { templateRegister } from './templateRegister.js'

//vista de perfil
export const templateMainScreen = () => {
    // creamos div que contendrá la plantilla
    const containerMainScreen = document.createElement('div');
    // creamos el contenido del MainScreen
    const contentMainScreen = ` 
    <img src="https://q8j4b9t4.stackpathcdn.com/wp-content/uploads/2017/05/Happy-old-people-300x200.jpg" alt="adultos sonriendo" />
    <button id="loginGoogle">INICIAR Sesión con Google</button>
    <button id="login">INICIAR Sesión</button>
    <button id="register">REGISTRAR cuenta</button>`;

    // pasar el contenido al div
    containerMainScreen.innerHTML = contentMainScreen;
    // le pido que busque el id del boton dentro del div creado
    const btnlogin = containerMainScreen.querySelector('#login');
    // evento del botón que llama a iniciar sesión
    btnlogin.addEventListener('click', () => {
        templateLogin();
        window.location.hash = '#/login';
    })
    const btnregister = containerMainScreen.querySelector('#register');
    // evento del botón que llama el procedicmientop de registro
    btnregister.addEventListener('click', () => {
        templateRegister();
        window.location.hash = '#/register';
    })
    const btnGoogle = containerMainScreen.querySelector('#loginGoogle');
    // evento del botón que llama a la autentificación de google.
    btnGoogle.addEventListener('click', ()=>{
        loginGoogle();
    });

    return containerMainScreen;
  }
