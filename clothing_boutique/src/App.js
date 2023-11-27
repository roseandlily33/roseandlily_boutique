import {Routes, Route} from 'react-router-dom';
import Navbar from './routes/navbar/navbar.component';
import Home from "./routes/home/home.component";
import SignIn from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import CategoriesPreview from './routes/categories-preview/categories-preview.component';
import Category from './routes/category/category.component';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    black: '#463636',
    white: '#ffffff',
    teal: '#227777',
    yellow:' #f5ba45'
  },
  border: {
    borderRadius: '4px',
  }
};

function App() {

  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />}>
          <Route index element={<CategoriesPreview />} />
          <Route path=':category' element={<Category />} />
        </Route>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
    </ThemeProvider>
  );
}

export default App;
