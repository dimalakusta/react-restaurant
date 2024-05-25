import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, updateQuantity, removeItem, clearCart } = useContext(CartContext);

  const handleIncrease = (id) => {
    const item = cart.find(cartItem => cartItem.id === id);
    updateQuantity(id, item.quantity + 1);
  };

  const handleDecrease = (id) => {
    const item = cart.find(cartItem => cartItem.id === id);
    if (item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    } else {
      removeItem(id);
    }
  };

  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + calculateItemTotal(item.price, item.quantity), 0);
  };

  return (
    <div className="wrapper">
      <div className="cart">
        <div className="cart-header">
          <h1>Кошик</h1>
          {cart.length > 0 && (
            <button onClick={clearCart} className="clear-cart-button">Очистити кошик</button>
          )}
        </div>
        {cart.length === 0 ? (
          <div className='cart-header'>
            <p style={{fontSize:"22px"}}>Кошик порожній...</p>
          </div>
        ) : (
          <>
            <div className="cart-receipt">
              <ul style={{ listStyle: "none" }}>
                {cart.map((item, index) => (
                  <li key={index} className="">
                    <div className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <div className="cart-item-details">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p className="cart-item-price">${item.price}</p>
                        <div className="quantity-controls">
                          <div>
                            <button
                              onClick={() => handleDecrease(item.id)}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleIncrease(item.id)}>+</button>
                          </div>
                          <div>
                            <button onClick={() => removeItem(item.id)}>Видалити</button>
                          </div>

                        </div>
                        <p className="item-total">
                          Сума: ${calculateItemTotal(item.price, item.quantity)}
                        </p>
                      </div>
                    </div>
                    {index < cart.length - 1 && <hr className="dashed-line" />}


                  </li>

                ))}
              </ul>
            </div>
            <div className="cart-total">
              <h2>Загальна вартість: ${calculateTotal()}</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
