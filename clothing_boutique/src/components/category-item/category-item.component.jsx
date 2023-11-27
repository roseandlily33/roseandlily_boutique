import {CategoryContainer, BackgroundImageContainer, CategoryBodyContainer } from './category-item.styles';
import { useNavigate } from 'react-router-dom';
const CategoryItem = ({category}) => {
    const navigate = useNavigate();
    const navigateHandler = (route) => navigate(route);
    return ( 
        <CategoryContainer  >
        <BackgroundImageContainer>
        <img src={category.img} alt={category.alt}/>
        </BackgroundImageContainer>
        <CategoryBodyContainer>
        <h2 key={category.id}>{category.title}</h2>
        <p onClick={() => navigateHandler(category.route)}>Shop Now</p>
    </CategoryBodyContainer>
    </CategoryContainer >
     );
}

 
export default CategoryItem;