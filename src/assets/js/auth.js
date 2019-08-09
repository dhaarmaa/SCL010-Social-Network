/* Funciones relacionadas con autentificación de usuari@s */
//f(x) para crear coleccion de usuario con id, name y email
export const saveUsers = (name, email,uid) => {
  let db = firebase.firestore();
  db.collection("users").add({
    uid: uid,
    name: name,
    email: email
   

  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}


export const loginGoogle = () => {
    // console.log('Login con Google OK');
    const provider = new firebase.auth.GoogleAuthProvider();
  
    // this will return a promise
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        // console.log("Hola", user.displayName);
        let userName = splitGoogleDisplayName(user.displayName);
        saveUserToDatabaseAfterLogin(user.uid, userName.firstName, userName.lastName, user.email);
        // console.log(saveUserToDatabaseAfterLogin());
        })
      .catch(err => {
        console.log(err);
      })
  }
  
  const splitGoogleDisplayName = (displayName) => {
    var splitDisplayNameArray = displayName.split(" ");
    let userName = {
      firstName: splitDisplayNameArray[0],
      lastName: splitDisplayNameArray[1],
    }
  
    return userName;
  }
  
  const saveUserToDatabaseAfterLogin = (uid, firstName, lastName, email) => {
    console.log(uid, firstName, lastName, email);
  };

  //login con correo


