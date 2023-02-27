import { initializeApp } from 'firebase/app';
import { actionCodeSettingsForgotPassword, actionCodeSettingsVerification, firebaseConfig } from './firebase-config';
import {

  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,

} from 'firebase/firestore';

//iniciamos nuestra app con firebase 
const app = initializeApp(firebaseConfig);
//creamos nuestra store con firebase
export const firestore = getFirestore(app);

//esta funcion se encarga de crear un el perfil del usuario  con firebase.
export const createUserProfileDocument = async userAuth => {
  if (!userAuth || !userAuth.emailVerified) return;
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(firestore, `users/${userAuth.uid}`), {
        displayName: displayName || localStorage.getItem('username'),
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};
// esta funcion se encarga de verificar el usuario 
export const auth = getAuth();
auth.useDeviceLanguage();

// esta funcion se encarga de crear el usuario recibiendo como parametro , un email y una contraseña. 
export const createUser = (email, password, displayName) =>
  createUserWithEmailAndPassword(auth, email, password).then(userCredential =>
    sendEmailVerification(
      userCredential.user,
      actionCodeSettingsVerification
    ).then(() => {
      alert(`Mensaje de verificación enviado al mail ${email}`);
      localStorage.setItem('username', displayName);
    })
  );

//esta funcion se encarga de que el usuario se logee con contraseña y un email. 
export const signInUser = (email , password ) => signInWithEmailAndPassword(auth , email , password)
// esta funcion se encarga de restablecer la contraseña pasandole como parametro el email del usuario creado . 
export const resetPassword = (email) => sendPasswordResetEmail(auth , email , actionCodeSettingsForgotPassword).then(() => alert(`mail de recupero de contraseña enviado al email ${email}`))


const provider = new GoogleAuthProvider();

// esta funcion se encarga de que el usuario se logee usando google. 
export const signInWithGoogle = () => signInWithPopup(auth, provider);
