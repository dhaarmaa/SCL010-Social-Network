import { templateAbout } from "./templateAbout";

export const templateConfirmationTxt = () => {
    const containerConfirmationTxt = document.createElement('div');
    //escrir html
    const contentConfirmationTxt = `<h1>¡EXCELENTE, Carolina! Has creado una cuenta exitosamente.
    Te invitamos a iniciar sesión por primera vez.</h1>
    <button id="login-register">Iniciar sesión</button>
                            `

    containerConfirmationTxt.innerHTML = contentConfirmationTxt;
    const btn = containerConfirmationTxt.querySelector('#login-register');
    btn.addEventListener('click', () =>{
        templateAbout()
        window.location.hash = '#/about';
    })

    return containerConfirmationTxt;
};