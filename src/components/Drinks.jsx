import React, { useState, useEffect, useContext } from 'react';
import MenuItem from './MenuItem';
import { CartContext } from '../CartContext';

const Drinks = () => {
    const [drinks, setDrinks] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch('/menu.json')
            .then(response => response.json())
            .then(data => setDrinks(data.drinks));
    }, []);

    return (
        <div style={{ width: "100vw " }}>
            <div className='wrapper'>
                <h1>Напої</h1>
                <div className="menu-items">
                    {drinks.map(drink => (
                        <MenuItem key={drink.id} item={drink} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Drinks;
