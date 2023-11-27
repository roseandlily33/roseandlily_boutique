import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearCartItem: () => {},
    cartItemCount: 0,
    cartTotal: 0
});
//Cart items has the same properties as a product(id, name, price, imageURL) but includes the quantity
const addCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find((item) => 
         item.id === productToAdd.id
    )
    if(existingItem){
        return cartItems.map((item) => 
        //Keeps all the old properties of the item and then increments the quantity
        item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item
       );
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
};
const decrementCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    if(existingCartItem.quantity === 1){
        return cartItems.filter(item => item.id !== cartItemToRemove.id);
    }
    return cartItems.map((item) => 
    item.id === cartItemToRemove.id ? {...item, quantity: item.quantity - 1} : item)
}
const deleteCartItem = (cartItems, itemToDelete) => {
    return cartItems.filter(item => item.id !== itemToDelete.id);
}






export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => 
            total + cartItem.quantity, 0);
        setCartItemCount(newCartCount);
    },[cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => 
        total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const decrementItemFromCart = (productToDelete) => {
        setCartItems(decrementCartItem(cartItems, productToDelete));
    };
    const clearCartItem = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete));
    }
    const value = {isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemToCart, cartItemCount, addCartItem, decrementItemFromCart, clearCartItem, cartTotal};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}