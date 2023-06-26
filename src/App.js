

import Routes from "./routes/Routes";
import { GlobalStyles } from "./styles/GlobalStyles";

import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import Footer from "./components/footer/Footer";

import { useRef } from "react";



function onAuthStateChange(cb, action) {
  onAuthStateChanged(auth, async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      onSnapshot(userRef, snapShot =>
        cb(action({ id: snapShot.id, ...snapShot.data() }))
      );
    } else {
      cb(action(null));
    }
  });
}

function App() {
  const dispatch = useDispatch()
 useEffect(() => {
  
 
   return () => {

   }
 }, [dispatch])
 
 const productsRef = useRef();
  return (
    <>
      

      <GlobalStyles />
      <Routes />
      <Footer/>
    </>
  );
}

export default App;
