import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";

const userReducer = (state, action) => {
    const {type, payload} = action;
    console.log('dispatched')
    console.log('ACTION', action)
    //...state returns all the previous values and doesnt overwrite it except for the value that u specify after that. 
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER : return {
            ...state,
            currentUser: payload
        }
        case 'Increment': return {value: state.value + 1}
        default: throw new Error('Not a valid type', type, ' in user reducer'); 
    }
};
export const USER_ACTION_TYPES = {
    'SET_CURRENT_USER' : 'SET_CURRENT_USER'
}


//Context is the actual value/storage, pass it the default value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});
//The initial state for user reducer
const INITIAL_STATE = {
    currentUser: null
}

//Provider is the actual component
export const UserProvider = ({children}) => {
   //Takes in the reducer and the initial state, inside [state and dispatch]
    //Dispatch is a function that when u call it u pass it an action object and it passses it to the userReducer runs through switch statement and updates
   const [{currentUser}, disptach] = useReducer(userReducer, INITIAL_STATE );
   console.log('CURRENT USER', currentUser)

    const setCurrentUser = (user) => {
        disptach({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    }

    //FOR USECONTEXT:
   // const [currentUser, setCurrentUser ] = useState(null);
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