import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";
//Context is the actual value/storage, pass it the default value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

//Provider is the actual component
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser ] = useState(null);
    const value = {
        currentUser, 
        setCurrentUser
    };
    useEffect(() => {
       const unsubscribe =  onAuthStateChangedListener((user) => {
            if(user){
               createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}   