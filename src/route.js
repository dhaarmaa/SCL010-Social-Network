import { templateLogin } from './assets/views/templateLogin.js'
import { templateRegister }  from  './assets/views/templateRegister.js'

const changeRouter = (hash) =>{
    if(hash === '#/login' || hash === '#/register' || hash === '/#' || hash === '#' || hash === ''){
        return showTemplate(hash);
    }
}

const showTemplate = (hash) =>{
    const router = hash.substring(2);
    const containerRoot = 
    document.getElementById('root');
    containerRoot.innerHTML = '';


    switch(router){
        case 'login': 
        containerRoot.appendChild(templateLogin())
        break;
        case '/#':
        containerRoot.appendChild(templateLogin())
        break;
        case '#/':
        containerRoot.appendChild(templateLogin())
        break;
        case '':
        containerRoot.appendChild(templateLogin())
        break;
        case 'register':
        containerRoot.appendChild(templateRegister())
        break;
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