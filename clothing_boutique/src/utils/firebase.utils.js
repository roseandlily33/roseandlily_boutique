import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfc3GbyasU84AudXb8NhBoXLoVktApMv4",
    authDomain: "e-commerce-f0f05.firebaseapp.com",
    projectId: "e-commerce-f0f05",
    storageBucket: "e-commerce-f0f05.appspot.com",
    messagingSenderId: "567120641974",
    appId: "1:567120641974:web:669841b7c728962a43cb17",
    measurementId: "G-EGDL6MLN0Q"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    //Transaction represents a sucessful unit of work to a db. Can be multiple sets of setting values into the db.
    //Batch allows u to attach writes etc to the batch and only when we fire the batch does the transaction begin.  
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        //Takes in the collection and the key
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
  };

  export const getCategoriesAndDocuemnts = async() => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
    return categoryMap;
  }

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect =() => signInWithRedirect(auth, provider);

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async(userAuth, additionalInfo={}) => {
    if(!userAuth){
        return;
    }
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        }
        catch(err){
            console.log('Error creating the user', err.message)
        }
        return userDocRef;
    }
  }

  export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password){
        return;
    }
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password){
        return;
    }
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async() => await signOut(auth);

//Waits and see whether auth states are changing and the moment that it does it runs the callback, it is always listening. Have to tell it stop listening when the component unmounts. 
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

/* 
{ auth, callback, errorCallback, completedCallback
    next: callback,
    error: errorCallback,
    complete: completedCallback
}
*/