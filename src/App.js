import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/home/Home';
import ProductList from './components/product-list/ProductList';
import ContactUs from './components/contact-us/ContactUs';
import AboutUs from './components/about-us/AboutUs';
import ProductDetail from './components/product-detail/ProductDetail';
import CartContext from './contexts/CartContext';
import { useState } from 'react';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  function addToCart(cartItem){
    console.log("from add to cart function", cartItem);
    setCartItems(cartItem);
    navigate('/cart');
  }

  return (
    <div className="App">
      <CartContext.Provider value={{
        cartItem : cartItems,
        saveToCart : addToCart
      }} >
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </CartContext.Provider>
    </div>
  );
}

export default App;
