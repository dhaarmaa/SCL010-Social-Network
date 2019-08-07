import { templateConfirmationTxt } from "./templateConfirmationTxt.js";

export const templateRegister2 = () => {
    const containerRegister2 = document.createElement('div');
    //escrir html
    const contentRegister2 = `<h1>REGISTRAR cuenta</h1>
                            <p>Ingrese un correo</p>                            
                            <input type= "text">
                            <p>Ingrese una contraseña</p>
                            <input type= "text">
                            <button id="back">atras</button>
                            <button id="next2">adelante</button>`

    containerRegister2.innerHTML = contentRegister2;


    const btn = containerRegister2.querySelector('#next2');

    btn.addEventListener('click', () =>{
        templateConfirmationTxt();
        window.location.hash = '#/confirmation';
    })
    return containerRegister2;
}