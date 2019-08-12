import { loginGoogle } from './../js/auth.js';
import {  templateAbout} from './templateAbout.js'

export const templateLogin = () => {
  // creamos div que contendrá la plantilla
  const containerLogin = document.createElement('div');
  containerLogin.setAttribute("class","mainClass");
  // creamos el contenido del login
  const contentLogin = ` <h1>Iniciar Sesión</h1>
                        <p>Ingrese su correo de usuario:</p>                            
                        <input class="input" type= "text">
                        <p>Ingrese su contraseña de usuario:</p>
                        <input class="input" type= "text">
                        <button class="button" id="back">Volver</button>
                        <button class="button" id="next">Seguir</button>
                        

                        `;
  // pasar el contenido al div
  containerLogin.innerHTML = contentLogin;
  // le pido que busque el id del boton dentro del div creado
  const btn = containerLogin.querySelector('#next');
  // evento del botón que llama a la autentificación de google.
  btn.addEventListener('click', () => {
    templateAbout()
    window.location.hash = '#/about';
  })
  return containerLogin;
}
