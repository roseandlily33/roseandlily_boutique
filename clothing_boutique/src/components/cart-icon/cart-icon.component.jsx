import './cart-icon.styles.jsx';
import {ReactComponent as ShoppingIcon} from '../../images/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import { ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartItemCount} =useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div onClick={toggleIsCartOpen}>
             <ShoppingIcon className="icon" />
            <ItemCount>{cartItemCount}</ItemCount>
        </div>
      );
}
 
export default CartIcon;