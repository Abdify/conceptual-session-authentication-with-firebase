import {
    GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase.init";


const useFirebase = () => {

    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider(); 

    useEffect(() => {

    }, [])

     const signInUsingGoogle = () => {
         signInWithPopup(auth, googleProvider)
             .then((result) => {
                 console.log(result.user);
                //  setUser(result.user);
             })
             .catch((error) => {
                 console.log(error.message);
             });
     };

     const handleSignOut = () => {
         signOut(auth).then(() => {console.log("done")})
     }

     useEffect(() => {
         onAuthStateChanged(auth, (user) => {
             setUser(user || {});
         });
     }, [])

    return {
        user,
        signInUsingGoogle,
        handleSignOut
    }
}

export default useFirebase;