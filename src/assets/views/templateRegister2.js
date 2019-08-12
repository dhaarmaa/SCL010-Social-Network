import { templateConfirmationTxt } from "./templateConfirmationTxt.js";

export const templateRegister2 = () => {
    const containerRegister2 = document.createElement('div');
    containerRegister2.setAttribute("class","mainClass");
    //escrir html
    const contentRegister2 = `<h1>Registrar cuenta</h1>
                            <p>Ingrese un correo</p>                            
                            <input class="input" type= "text">
                            <p>Ingrese una contraseña</p>
                            <input class="input" type= "text">
                            <button class="button" id="back">Volver</button>
                            <button class="button" id="next1">Seguir</button>`

    containerRegister2.innerHTML = contentRegister2;


    const btn = containerRegister2.querySelector('#next1');

    btn.addEventListener('click', () =>{
        templateConfirmationTxt();
        window.location.hash = '#/confirmation';
    })
    return containerRegister2;
}