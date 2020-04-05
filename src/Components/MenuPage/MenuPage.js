import React from 'react';
import './MenuPage.css'
import { Link } from 'react-router-dom';




const MenuPage = (props) => {

    const { image, item, text, price, category } = props.items;



    return (

        <div className="menu">
            <Link to='/demo' style={{ textDecoration: 'none' }}><img src={image} alt="images" />
                <p><small>{category}</small></p>
                <h4>{item}</h4>
                <p>{text}</p>
                <h4>${price}</h4>

            </Link>
        </div>

    );
};

export default MenuPage;