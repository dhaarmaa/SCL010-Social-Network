// //rutas de los template

// import {nombre del template} from './assets/views/ nombre del archivo template';
// import {nombre del template} from './assets/views/ nombre del archivo template';
// import {nombre del template} from './assets/views/ nombre del archivo template';
// import {nombre del template} from './assets/views/ nombre del archivo template';
// import {nombre del template} from './assets/views/ nombre del archivo template';

//cambio de ruta
// export const changeRoute = (hash) => {
//     if (hash === '#/nombretemplate' || hash === '#/nombretemplate' || hash === '#/nombretemplate' || hash === '#/nombretemplate'||hash === '#/nombretemplate' || hash === '' || hash === '#/' || hash === '/#') {
//       return showTemplate(hash)
//     }
//     return showTemplate(hash)
//   }
  
//   // segunda función showTemplate(hash)
  
//   const showTemplate = (hash) => {
//     // #/register
//     const router = hash.substring(2); // login register project
//     const containerRoot = document.getElementById('root');//llamo a mi root
//     containerRoot.innerHTML = '';
  
//     switch (router) {
//       case 'nombre de hash':
//         template();
//         break;
//       case 'project':
//         templateProject();
//         break;
//       case 'hash(nombre)':
//         templateLogin();
//         break;
//       case 'hash(nombre)':
//         template();
//       break;
//       case 'hash(nombre)':
//         template();
//         break;
//       case '':
//         template();
//         break;
//       default:
//         containerRoot.innerHTML = `<h1>Error 404</h1>`
//     }
//   }
  
//   export const initRouter = () => {
//     window.addEventListener('load', changeRoute(window.location.hash));
  
//     if ('onhashchange' in window) {
//       window.onhashchange = () => {
//         
//       changeRoute(window.location.hash);
      
//     }
//   }
  
//   }