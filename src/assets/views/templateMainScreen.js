import { templateLogin } from "./templateLogin.js";
// import { templateRegister } from './templateRegister.js'

//vista de perfil
export const templateMainScreen = () => {
    // creamos div que contendrá la plantilla
    const containerMainScreen = document.createElement('div');
    // creamos el contenido del MainScreen
    const contentMainScreen = ` 
    <button id="loginGoogle">INICIAR Sesión con Google</button>
    <button id="login">INICIAR Sesión</button>
    <button id="register">REGISTRAR cuenta</button>`;

    // pasar el contenido al div
    containerMainScreen.innerHTML = contentMainScreen;
    // le pido que busque el id del boton dentro del div creado
    const btn = containerMainScreen.querySelector('#login');
    // evento del botón que llama a la autentificación de google.
    btn.addEventListener('click', () => {
        templateLogin();
        window.location.hash = '#/login';
    })
    // const btn = containerMainScreen.querySelector('#register');
    // btn.addEventListener('click', () => {
    //     templateRegister();
    //     window.location.hash = '#/Register';
    // })
    return containerMainScreen;
  }
