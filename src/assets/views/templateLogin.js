// import {  } from ""; //importar funcion de iniciar secion con correo con firebase
// import {  templateAbout} from './templateAbout.js'
import

export const templateLogin = () => {
  // creamos div que contendrá la plantilla
  const containerLogin = document.createElement('div');
  containerLogin.setAttribute("class","mainClass");
  // creamos el contenido del login
  const contentLogin = ` <h1>Iniciar Sesión</h1>
                        <p>Ingrese su correo de usuario:</p>                    
                        <input  type="text" id="email" name="email"  placeholder="Ingrese un correo" required>
                        <p>Ingrese su contraseña de usuario:</p>
                        <input  type="password" id="password" name="password"  placeholder="Ingrese una contraseña" required> 
                        <button id="back">atras</button>
                        <button id="next">adelante</button>
                        `;
  // pasar el contenido al div
  containerLogin.innerHTML = contentLogin;

  // le pido que busque el id del boton dentro del div creado
  const btnBack = containerLogin.querySelector('#back');
  // evento del botón que llama a la autentificación de google.
  btnBack.addEventListener('click', () => {

    window.location.hash = '';
  });

  const btnNext = containerLogin.querySelector('#next');
  // evento del botón que llama a la autentificación de google.
  btnNext.addEventListener('click', () => {
    let mailValue= document.getElementById('email').value;
    let passValue= document.getElementById('password').value;

    if (validateLogin(mailValue, passValue)) {
      document.getElementById('error-message').innerHTML="Usuario / contraseña inválido";
      document.getElementById('email').value='';
      document.getElementById('password').value='';
      
    } else {
      login(mailValue, passValue);
        readNameDB();
     }
 
    templateWall();
    window.location.hash = '#/wall';
  })
  return containerLogin;
}

export const validateLogin = (mail, password) => {
  if (mail === "" || password ==="" || mail.length=== 0 || password.length === 0 || password.length <6 || typeof(mail) === "undefined" || typeof(password)=== "undefined") {
      return true;
  }
  return false;
}

// document.getElementById("next")
