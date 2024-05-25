import React, { useState, useEffect, useContext } from 'react';
import MenuItem from './MenuItem';
import { CartContext } from '../CartContext';


const Dishes = () => {
    const [dishes, setDishes] = useState([]);
    const { addToCart } = useContext(CartContext);


    useEffect(() => {
        fetch('/menu.json')
            .then(response => response.json())
            .then(data => setDishes(data.dishes));
    }, []);

    return (
        <div style={{ width: "100vw " }}>
            <div className='wrapper'>
                <h1>Страви</h1>
                <div className="menu-items">
                    {dishes.map(dish => (
                        <MenuItem key={dish.id} item={dish} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dishes;
