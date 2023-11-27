import { ShopComponent } from './shop.styles';
import { Outlet } from 'react-router-dom';

const Shop = () => {

    return ( 
     <ShopComponent>
      <Outlet />
     </ShopComponent>
     );
}
 
export default Shop;