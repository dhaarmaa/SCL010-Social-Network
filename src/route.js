import { templateLogin } from './assets/views/templateLogin.js'
import { templateRegister }  from  './assets/views/templateRegister.js'
import { templateRegister2 } from './assets/views/templateRegister2.js'
import { templateConfirmationTxt } from './assets/views/templateConfirmationTxt.js'
import { templateMainScreen } from './assets/views/templateMainScreen.js'
import { templateAbout} from './assets/views/templateAbout.js'


const changeRouter = (hash) =>{
    console.log("HASH:", hash);
    if( hash === '/#' || hash === '#' || hash === '' || hash === '#/login' || hash === '#/register' || hash ==='#/register2' || hash === '#/confirmation' || hash === '#/about'){
        return showTemplate(hash);
    }
}

const showTemplate = (hash) =>{
    console.log("SHOW TEMPLATE HASH", hash);
    const router = hash.substring(2);
    const containerRoot = 
    document.getElementById('root');
    containerRoot.innerHTML = '';


    switch(router){
        
        case '/#':
        containerRoot.appendChild(templateMainScreen())
        break;
        case '#/':
        containerRoot.appendChild(templateMainScreen())
        break;
        case '':
        containerRoot.appendChild(templateMainScreen())
        break;
        case 'login': 
        containerRoot.appendChild(templateLogin())
        break;
        case 'register':
        containerRoot.appendChild(templateRegister())
        break;
        case 'register2':
            console.log("register en switch");
        containerRoot.appendChild(templateRegister2())
        break;
        case '#/confirmation':
            console.log("confirmation en switch");
        containerRoot.appendChild(templateConfirmationTxt())
        break;
        case '#/about':
        containerRoot.appendChild(templateAbout())
        break
        default:
            containerRoot.innerHTML = `<p> Error 404</p>`
    }
}

export  const initRouter = () =>{
    window.addEventListener('load', changeRouter(window.location.hash));
    if('onhashchange' in window){
        window.onhashchange = ()=>{
            changeRouter
            (window.location.hash);
        }
    }
}