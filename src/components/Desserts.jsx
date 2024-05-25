import React, { useState, useEffect, useContext } from 'react';
import MenuItem from './MenuItem';
import { CartContext } from '../CartContext';

const Desserts = () => {
    const [desserts, setDesserts] = useState([]);
    const { addToCart } = useContext(CartContext);

    const getDesserts = async () => {
        await fetch('/menu.json')
            .then(response => response.json())
            .then(data => setDesserts(data.desserts));
    }

    useEffect(() => {
        getDesserts()
    }, []);

    return (
        <div style={{ width: "100vw " }}>
            <div className='wrapper'>
                <h1>Десерти</h1>
                <div className="menu-items">
                    {desserts.map(dessert => (
                        <MenuItem key={dessert.id} item={dessert} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Desserts;
