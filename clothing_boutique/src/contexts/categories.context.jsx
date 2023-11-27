import { createContext, useState, useEffect} from "react";
//import SHOP_DATA from '../shop-data.js';
//import { addCollectionAndDocuments } from "../utils/firebase.utils.js";
import { getCategoriesAndDocuemnts } from "../utils/firebase.utils";

export const CategoriesContext = createContext({
   categories: {}
});


export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState({});

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // },[]);
    //When using an async function inside of useEffect make a async function inside of the useEffect
    useEffect(() => {
        const getCategories = async() => {
           const categoryMap = await getCategoriesAndDocuemnts();
           setCategories(categoryMap);
        }
        getCategories();
        
    }, []);

    const value = {
        categories
    };
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};