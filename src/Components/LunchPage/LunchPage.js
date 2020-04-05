import React from 'react';

import MenuPage from '../MenuPage/MenuPage';
import { useState } from 'react';
import { useEffect } from 'react';

const LunchPage = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://warm-coast-59865.herokuapp.com/foodItems')
            .then(res => res.json())
            .then(data => {
                console.log("data received", data[0])

                setItem(data)
            })
    }, [])
    const lunchData = item.filter(x => x.category === "Lunch");

    const first3 = lunchData.slice(0, 3);

    const last3 = lunchData.slice(3, 6);

    return (
        <div className="displayMenu">
            <div className="items-row1">
                {first3.map(item => {
                    return <MenuPage
                        key={item.id}
                        items={item}

                    ></MenuPage>
                })}

            </div>
            <div className="items-row2">
                {last3.map(item => {
                    return <MenuPage
                        key={item.id}
                        items={item}
                        className=""
                    ></MenuPage>
                })}

            </div>
        </div>
    );
};

export default LunchPage;