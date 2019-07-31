//vista de inicio de sesión y botton de registro
const loginGoogle = () =>{
    console.log("login con Google");
}

export const templateLogin= () => {
    const containerLogin = document.createElement('div');
    const contentLogin = `<p>Login con google</p>
                            <button id="login">Login with Google</button>`
    containerLogin.innerHTML =  contentLogin;

const btn =  containerLogin.querySelector('#login');
btn.addEventListener('click', ()=>{
    loginGoogle()
})
return containerLogin;
}


