import React, { createContext, useState, useMemo, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart(prevCart =>
      prevCart.map(cartItem =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
