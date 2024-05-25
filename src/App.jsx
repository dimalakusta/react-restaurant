import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Dishes from './components/Dishes';
import Drinks from './components/Drinks';
import Desserts from './components/Desserts';
import NavBar from './components/Navigation';
import Cart from './components/Cart';
import { CartProvider } from './CartContext';
import { BASE_PATH } from './config';

const App = () => (
  <CartProvider>
    <Router>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route exact path={`${BASE_PATH}`} element={<Home />} />
          <Route path={`${BASE_PATH}dishes`} element={<Dishes />} />
          <Route path={`${BASE_PATH}drinks`} element={<Drinks />} />
          <Route path={`${BASE_PATH}desserts`} element={<Desserts />} />
          <Route path={`${BASE_PATH}cart`} element={<Cart />} />
          <Route path="*" element={<Navigate to={`${BASE_PATH}`}/>} />

        </Routes>
      </div>
    </Router>
  </CartProvider>

);

export default App;
