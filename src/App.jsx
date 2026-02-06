import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import ProductPage from './components/product/ProductPage';
import Preloader from './components/layout/Preloader';
import CartDrawer from './components/cart/CartDrawer';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addToCart = (product) => {
    // Add unique ID to item for removal
    const newItem = { ...product, cartId: Date.now() + Math.random() };
    setCartItems(prev => [...prev, newItem]);
    setIsDrawerOpen(true); // Open drawer on add
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }


  // ... imports

  return (
    <Router>
      <ScrollToTop />
      <Header cartCount={cartItems.length} onCartClick={toggleDrawer} />
      <CartDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        cartItems={cartItems}
        onRemove={removeFromCart}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/products" element={<ProductPage addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
