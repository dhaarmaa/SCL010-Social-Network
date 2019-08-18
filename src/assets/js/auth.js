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
    sessionStorage.setItem('uid', user.uid);
    sessionStorage.setItem('fullName', user.fullName);   
    sessionStorage.setItem('email', user.email);   
    window.location.hash = '#/wall';
    })
  .catch(err => {
    console.log('Error al obtener documento', err);
  }); 
};

 export const handleSignUp=()=> {
  let name=sessionStorage.getItem('name');
  let lastName = sessionStorage.getItem('lastName');
  let fullName=name+" "+lastName;
  let email = document.getElementById('email').value;
  let password;
  if(checkingPassword()){
    password = document.getElementById('password').value; 
  } else{
   alert ("revisar contraseñas, no son iguales")
  }
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
      fullName:fullName,
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

const checkingPassword =()=>{
  let password = document.getElementById('password').value;  
  let password1 = document.getElementById('password1').value;  
  let checkingPassword;
   if(password===password1){
    checkingPassword=true;
   }else{
    checkingPassword=false;
   }
 return checkingPassword;
}

//f(x) login
export const signIn=()=> {
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
      //document.getElementById('quickstart-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
    // [END authwithemail]
    //document.getElementById('quickstart-sign-in').disabled = true;
}
//f(x) de guardar y optener post
export const savePost = () => {
  var db = firebase.firestore();
  // colección creada
  db.collection("posts").add({
  post: document.getElementById('text-post').value,
  userId: firebase.auth().currentUser.uid,
  // time: new Date(),
  
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
};

export const getPost = () => {
  var db = firebase.firestore();
  db.collection("posts").where("userId", "==", firebase.auth().currentUser.uid)      //.orderBy("time", "desc").limit(20)
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      let post=db.collection("posts");
      // post.orderBy("time","desc")
      console.log(doc.data())
      toConect(doc)
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
  });
};

//Function to delete a document from posts collection
export const deletePost = (id) => {
let db = firebase.firestore();
db.collection("posts").doc(id).delete().then(function() {
  console.log("Document successfully deleted!");
}).catch(function(error) {
  console.error("Error removing document: ", error);
})
}
  
