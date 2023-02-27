
import * as userActions from "./redux/user/user-actions"
import Routes from "./routes/Routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import UserModal from './components/userModal/UserModal';
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import Footer from "./components/footer/Footer";


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
  const unsuscribe = onAuthStateChange(dispatch, userActions.setCurrentUser);
 
   return () => {
    unsuscribe();
   }
 }, [dispatch])
 
  return (
    <>
      <UserModal />
      <GlobalStyles />
      <Routes />
      <Footer/>
    </>
  );
}

export default App;
