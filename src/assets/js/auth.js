<<<<<<< HEAD
=======
import { templateWall } from "../views/templateWall";

>>>>>>> 01157e32632dc3e1002121820beb5d613b0e176c
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  // esto devolvera una promesa
  firebase.auth().signInWithPopup(provider).then(result => {
      const user = result.user;
      let userData = {
        uid: user.uid,
        fullName: user.displayName,
        email: user.email,
      } 
      saveUserToDatabaseAfterLogin(userData);
    })
    .catch(err => {console.log(err);});
}

//salvando los datos en la base de datos de firebasa despues de logiarse con google
 export const saveUserToDatabaseAfterLogin = (userData) => {
  const db = firebase.firestore();
  let docRef = db.collection('users').doc(userData.uid);
  docRef.get()
  .then(doc => {
   let user={};
   
    if (!doc.exists) {
        docRef.set(userData);
        user=userData
    }else{
      user=doc.data();
    }
<<<<<<< HEAD
    sessionStorage.setItem('uid', user.uid);
    sessionStorage.setItem('fullName', user.fullName);   
    sessionStorage.setItem('email', user.email);   
    window.location.hash = '#/wall';
=======
      sessionStorage.setItem('uid', doc.data().uid);
      sessionStorage.setItem('fullName', doc.data().fullName);   
      sessionStorage.setItem('email', doc.data().email);  
      templateWall(); 
      window.location.hash = '#/wall';
>>>>>>> 01157e32632dc3e1002121820beb5d613b0e176c
    })
  .catch(err => {
    console.log('Error al obtener documento', err);
  }); 
};

<<<<<<< HEAD
 export const handleSignUp=()=> {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  if (email.length < 4) {
    alert('Por favor introduzca una dirección de correo eléctronico.');
    return;
  }
  if (password.length < 4) {
    alert('Por favor ingrese una contraseña.');
    return;
  }
  // Sign in with email and pass.
  // [START createwithemail]
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(data => {
    sendEmailVerification();
    saveUserToDatabaseAfterLogin({
      password: password,
      email:email,
      uid:data.user.uid,
    });
  })
  .catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('La contraseña es muy insegura..');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END createwithemail]
}

/**
 * Sends an email verification to the user.
 */

export const sendEmailVerification=()=> {
  // [START sendemailverification]
  firebase.auth().currentUser.sendEmailVerification().then(function() {
    // Email Verification sent!
    // [START_EXCLUDE]
    alert('¡Verificación de correo electrónico enviada!');
    // [END_EXCLUDE]
  });
  // [END sendemailverification]
}

export const toggleSignIn=()=> {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  } else {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Por favor introduzca una dirección de correo eléctronico.');
      return;
    }
    if (password.length < 4) {
      alert('Por favor ingrese una contraseña.');
      return;
    }
    // Sign in with email and pass.
    // [START authwithemail]
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña incorrecta.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementById('quickstart-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
    // [END authwithemail]
  }
  document.getElementById('quickstart-sign-in').disabled = true;
}
=======
//register

export const register = ( email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {

      let user = firebase.auth().currentUser;
      let uid = user.uid;
      //console.log(uid);
      verifyAccount();
      observer();
      saveUsers(email,uid);
     
      window.location.hash = '#/wall';

    })
    .catch(error => {
      // Handle Errors here.
      let errorCode = error.code;
      userInvalid(errorCode);
      let errorMessage = error.message;
    });
}
>>>>>>> 01157e32632dc3e1002121820beb5d613b0e176c
