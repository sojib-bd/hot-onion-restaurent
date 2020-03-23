import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <a href="/breakfast" className="option">Breakfast</a>
                <a href="/lunch" className="option">Lunch</a>
                <a href="/dinner" className="option">Dinner</a>
            </nav>
        </div>
    );
};

export default Header;