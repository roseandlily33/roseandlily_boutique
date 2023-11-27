import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { TotalContainer, CheckoutContainer } from "./checkout.styles";

const Checkout = () => {
    const {cartItems, addItemToCart, decrementItemFromCart, clearCartItem, cartTotal} = useContext(CartContext);

    return ( 
        <CheckoutContainer>
           <CheckoutItem  incrementQuanity={addItemToCart} deleteItem={clearCartItem} decrementItemFromCart={decrementItemFromCart} cartItems={cartItems}/>
           <TotalContainer>Total: ${cartTotal}</TotalContainer>
        </CheckoutContainer>
     );
}
 
export default Checkout;