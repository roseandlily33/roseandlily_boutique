import { categories } from "./categories";
import CategoryItem from "../category-item/category-item.component";
import { MenuContainer } from "./category-menu.styles";


const CategoryMenu = () => {
    return ( 
        < MenuContainer>
        {categories.map((category) => (
          <CategoryItem category={category}/>
        ))}
      </ MenuContainer>
    );
}
 
export default CategoryMenu;