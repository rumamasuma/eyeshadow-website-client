import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth,GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword ,onAuthStateChanged ,signOut} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  
const [user, setUser]= useState({});
const [isLoading, setIsLoading] = useState(true);
const [authError, setAuthError] = useState('');

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// user registration process

const registerUser =(email, password, name, history) =>{
   setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
   .then((result) => {
   setAuthError('');
   const newUser = {email, displayName : name};
   setUser(newUser);
  // send user name to firebase after creation
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {  
  }).catch((error) => {
  
  });
   history.push('/');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));
}

  // user login process
  const loginUser =(email, password, location, history)=>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Signed in 
      const userDestination = location?.state?.from || '/';
      history.push(userDestination);
      setAuthError('');   
    })
    .catch((error) => {
        setAuthError(error.message);
    })
    .finally(() => setIsLoading(false));
}

// user sign in using google
const signInWithGoogle = (location,history) =>{
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
    .then((result) => {   
      // const user = result.user;
      setAuthError('');  
    
    }).catch((error) => {
        setAuthError(error.message);
    })
    .finally(() => setIsLoading(false));
}

// observe user state change or not
 useEffect(()=>{
 const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user);
        } 
        else {
        setUser({});
        }
        setIsLoading(false);
      });
      return () => unsubscribed;
},[])


// user Logout process
const logOut =() =>{
    setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
}

    return {
      user, registerUser,loginUser,signInWithGoogle,isLoading, authError, logOut
    }
};

export default useFirebase;