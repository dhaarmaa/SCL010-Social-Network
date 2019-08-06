import { loginGoogle } from './../js/auth.js';
// import { }

export const templateLogin = () => {
  // creamos div que contendrá la plantilla
  const containerLogin = document.createElement('div');
  // creamos el contenido del login
  const contentLogin = ` <h1>Hola Bienvenid@!</h1>
                        <p>Correo</p>                            
                        <input type= "text">
                        <p>contraseña</p>
                        <input type= "text">

                        <`;
  // pasar el contenido al div
  containerLogin.innerHTML = contentLogin;
  // le pido que busque el id del boton dentro del div creado
  const btn = containerLogin.querySelector('#login');
  // evento del botón que llama a la autentificación de google.
  // btn.addEventListener('click', () => {
  //   loginGoogle();
  // })
  return containerLogin;
}
