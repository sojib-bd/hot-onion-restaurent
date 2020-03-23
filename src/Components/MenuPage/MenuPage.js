import React from 'react';
import './MenuPage.css'
import FooterButton from '../FooterButton/FooterButton';



const MenuPage = (props) => {
    const { image, item, text, price } = props.items
    console.log(image)
    const btnStyle = {
        color: 'black',
        cursor: 'pointer'
    }
    return (
        <div className="menu" onClick={() => <FooterButton style={btnStyle}>Order Now</FooterButton>}>
            <img src={image} alt="images" />
            <h4>{item}</h4>
            <p>{text}</p>
            <h4>${price}</h4>

        </div>
    );
};

export default MenuPage;