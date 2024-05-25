import React from 'react';
import '../styles/MenuItem.css';

const MenuItem = ({ item,addToCart }) => (
        <div className="menu-item">
          <img src={item.image} alt={item.name} className="menu-item-image" />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p className="menu-item-price">${item.price}</p>
          <button onClick={() => addToCart(item)} className="menu-item-button">Купити</button>
        </div>
      
);

export default MenuItem;
