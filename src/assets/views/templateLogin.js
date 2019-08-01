//vista de inicio de sesión y botton de registro
const loginGoogle = () =>{
    console.log("login con Google");
}
export const templateLogin= () => {
    const containerLogin = document.createElement('div');
    const contentLogin = `  <h1>Hola Bienvenid@!</h1>
                            <p>Correo</p>                            
                            <input type= "text">
                            <p>contraseña</p>
                            <input type= "text">

                            <button id="login">Iniciar Sesión</button>
                            <button id="btnregister">Registrarme</button>`
    containerLogin.innerHTML =  contentLogin;

const btnLogin=  containerLogin.querySelector('#login');
btnLogin.addEventListener('click', ()=>{
    loginGoogle();
    

})
const btnRegister = containerLogin.querySelector('#register');
btnRegister.addEventListener('click', () =>{

})
return containerLogin;
}


