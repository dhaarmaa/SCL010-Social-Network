//vista del registro de usuario
 const registerAcount = () =>{
    console.log("cuenta creada");
 }
export const templateRegister = () => {
    const containerRegister = document.createElement('div');

    const contentRegister = `templateRegister`

    containerRegister.innerHTML = contentRegister;

    const btn = containerRegister.querySelector('#registerbtn');

    btn.addEventListener('click', () =>{
        registerAcount();
    })

    return containerRegister;
}

// const createAccount = () => {
//     console.log("Create account");
//   }
  
//   export const templateCreate = () => {
//     // creamos div que contendrá la plantilla
//     const containerCreate = document.createElement('div');
//     // creamos el contenido del login
//     const contentCreate = `<p>Crear cuenta</p>
//                           <button id="create">Crear cuenta</button>`;
//     // pasar el contenido al div
//     containerCreate.innerHTML = contentCreate;
//     // le pido que busque el id del boton dentro del div creado
//     const btn = containerCreate.querySelector('#create');
//     // evento del botón que llama a la autentificación de google.
//     btn.addEventListener('click', () => {
//       createAccount();
//     })
//     return containerCreate;
//   }