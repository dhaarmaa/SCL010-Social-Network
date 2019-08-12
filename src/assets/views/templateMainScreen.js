import { templateLogin } from "./templateLogin.js";
import { templateRegister } from './templateRegister.js'

//vista de perfil
export const templateMainScreen = () => {
    // creamos div que contendrá la plantilla
    const containerMainScreen = document.createElement('div');
    containerMainScreen.setAttribute("class","mainClass");
    // creamos el contenido del MainScreen
    const contentMainScreen = ` 
        <img width=120 height=120>
        <h4>Vive la vida y olvida tu edad</h4>
    <button class="button" id="loginGoogle">Iniciar Sesión con Google</button>
    <button class="button" id="login">Iniciar Sesión</button>
    <button class="button" id="register">Registrar Cuenta</button>`;

    // pasar el contenido al div
    containerMainScreen.innerHTML = contentMainScreen;
    // le pido que busque el id del boton dentro del div creado
    const btnlogin = containerMainScreen.querySelector('#login');
    // evento del botón que llama a la autentificación de google.
    btnlogin.addEventListener('click', () => {
        templateLogin();
        window.location.hash = '#/login';
    })
    const btnregister = containerMainScreen.querySelector('#register');
    // evento del botón que llama a la autentificación de google.
    btnregister.addEventListener('click', () => {
        templateRegister();
        window.location.hash = '#/register';
    })
    return containerMainScreen;
  }
