import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dishes from './components/Dishes';
import Drinks from './components/Drinks';
import Desserts from './components/Desserts';
import NavBar from './components/Navigation';
import Cart from './components/Cart';
import { CartProvider } from './CartContext';

const App = () => (
  <CartProvider>
    <Router>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </div>
    </Router>
  </CartProvider>

);

export default App;
