import { Link, NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context.jsx";
import {signOutUser} from '../../utils/firebase.utils.js';
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";
import { NavBarContainer,  NavbarMiddleContainer, NavLinksContainer } from "./navbar.styles.jsx";

const Navbar = () => {
  const {currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  console.log('The current User', currentUser);
    return(
     <>
     <NavBarContainer>
     <NavLinksContainer >
        <NavLink to='/contact'>CONTACT</NavLink>
        <NavLink to='/shop'>SHOP</NavLink>
        </NavLinksContainer >
      < NavbarMiddleContainer>
      <Link to='/'><h1>Rose + Lily</h1></Link>
      </NavbarMiddleContainer>
       <NavLinksContainer >
        {
          currentUser ? <NavLink to='/' onClick={signOutUser}>SIGN OUT</NavLink> : <NavLink to='/signin'>SIGN IN</NavLink>
        }
        <h2><CartIcon /></h2>
       </NavLinksContainer >
      {isCartOpen && <CartDropdown /> }
      </NavBarContainer>
     <Outlet />
     </>
    )
   }
export default Navbar;