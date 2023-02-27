// esta funcion contiene informacion de nuestra aplicacion  configurada con Firebase. 
export const firebaseConfig = {
    apiKey: "AIzaSyDJfvrN56TpTmf36-JZlViuetjJkz3Hu_I",
    authDomain: "bombas-fernandez.firebaseapp.com",
    projectId: "bombas-fernandez",
    storageBucket: "bombas-fernandez.appspot.com",
    messagingSenderId: "449058850929",
    appId: "1:449058850929:web:b858b247977b9be3d2b3d0"
  };

  export const actionCodeSettingsVerification = {
    url :
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : ""
  };
  export const  actionCodeSettingsForgotPassword = {
    url : 
    process.env.NODE_ENV  ==="development" ?  "http://localhost:3000/login" : ""
  }