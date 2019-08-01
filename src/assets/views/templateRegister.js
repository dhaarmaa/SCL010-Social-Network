//vista del registro de usuario
 const registerAcount = () =>{
    console.log("cuenta creada");
 }
export const templateRegister = () => {
    const containerRegister = document.createElement('div');

    const contentRegister = `<p>Crear una cuenta</p>
    <button id="registerbtn">Cear cuenta</button>`

    containerRegister.innerHTML = contentRegister;

    const btn = containerRegister.querySelector('#registerbtn');

    btn.addEventListener('click', () =>{
        registerAcount();
    })

    return containerRegister;
}