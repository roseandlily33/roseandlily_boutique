import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import { CartItems, CartDropdownContainer } from './cart-dropdown.styles';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckout = () => {
        navigate('/checkout')
    }

    return (  
        <CartDropdownContainer>
            {cartItems.length ? 
             <CartItems>
             {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
             <button onClick={goToCheckout}>Checkout</button>
            </CartItems> : 
            <h3>Your cart is empty!</h3>
        }
           
        </CartDropdownContainer>
    );
}
 
export default CartDropdown;