import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import { ButtonContainer, ProductContainer } from './product-card.styles.jsx';

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext);

    return (
                  <ProductContainer>
                    <img src={product.imageUrl} alt={product.name}/>
                   <ButtonContainer>
                   <div key={product.id}>
                    <h3>{product.name}</h3>
                    <h4>${product.price}</h4>
                    </div>
                    <div>
                    <button onClick={() =>{
                        addItemToCart(product)
                    }}>Add to Cart</button>
                    </div>
                   </ButtonContainer>
                </ProductContainer>
   
     );
}
 
export default ProductCard;