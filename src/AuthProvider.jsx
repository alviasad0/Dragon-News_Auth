import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from './Firebase/firebase.config';
import { createContext } from "react";
import { useEffect } from "react";



export const AuthContext = createContext(null)
const AuthProvider = ({children }) => {
  
    const [user , setUser]= useState(null)  
    const [loading , setLoading ] = useState(true)

    /* create user with email and password  */
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    /* sing in with email and password  */

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email, password);
    }
    /* logOut */
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }    
        
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           setUser(currentUser);
           setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])
    
     
    const allExport = {
      user,
      createUser,
      loading,
      logIn,
      logOut,
    };
    return (
        
    <AuthContext.Provider value={allExport}>
        {children}
    </AuthContext.Provider>
    )
};

export default AuthProvider;