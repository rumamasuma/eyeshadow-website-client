import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth,GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword ,onAuthStateChanged ,signOut} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  
const [user, setUser]= useState({});
const [isLoading, setIsLoading] = useState(true);
const [authError, setAuthError] = useState('');
const [admin, setAdmin] = useState(false);

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
  //  save user namwe to firebase
  saveUser(email, name);
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
      const user = result.user;     
     saveUserGoogle(user.email, user.displayName);
     setAuthError(''); 
     const userDestination = location?.state?.from || '/';
     history.push(userDestination);
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
},[auth])

// admin data load
useEffect(()=>{
 fetch(`http://localhost:5000/users/${user.email}`)
 .then(res =>res.json())
 .then(data =>setAdmin(data.admin))
},[user.email])

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
// save user info for database
const saveUser = (email, displayName) =>{
 const user = {email, displayName };
 
 fetch('http://localhost:5000/users',{
   method :'POST',
   headers : {
     'content-type' : 'application/json'
   },
   body : JSON.stringify(user)
 })
 .then()
}
// save google login user to db
const saveUserGoogle = (email, displayName) =>{
 const user = {email, displayName };
 fetch('http://localhost:5000/users',{
   method :'PUT',
   headers : {
     'content-type' : 'application/json'
   },
   body : JSON.stringify(user)
 })
 .then()
}

    return {
      user,admin, registerUser,loginUser,signInWithGoogle,isLoading, authError, logOut
    }
};

export default useFirebase;