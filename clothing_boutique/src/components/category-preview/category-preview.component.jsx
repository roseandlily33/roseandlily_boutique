import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, Preview } from './category-preview.styles';
import { Link } from 'react-router-dom';

const CategoryPreview = ({title, products}) => {

    return (  
        <CategoryPreviewContainer>
            <Link to={title} className="titlePreview">{title.toUpperCase()}</Link>
            <Preview>
                {
                    products.filter((_, idx) => (idx < 4)).map((product) => <ProductCard product={product}/>)
                }
            </Preview>

        </CategoryPreviewContainer>
    );
}
 
export default CategoryPreview;