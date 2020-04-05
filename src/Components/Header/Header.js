import React from 'react';
import './Header.css';



const Header = () => {
    return (
        <div>
            <div className="banner">
                <div className="bannerElement">
                    <h3>Best food waiting for your belly</h3>
                    <input type="text" name="text" id="input" placeholder="Search for food items" />
                    <span><button id="searchBtn">Search</button></span>

                </div>
            </div>
            <nav>
                <a href="/breakfast" className="option">Breakfast</a>
                <a href="/lunch" className="option">Lunch</a>
                <a href="/dinner" className="option">Dinner</a>
            </nav>


        </div>
    );
};

export default Header;