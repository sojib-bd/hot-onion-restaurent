import React, { useState } from 'react';

import MenuPage from '../MenuPage/MenuPage';
import { useEffect } from 'react';


const DinnerPage = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('https://warm-coast-59865.herokuapp.com/foodItems')
            .then(res => res.json())
            .then(data => {
                // console.log("data received", data[0])

                setItem(data)
            })
    }, [])
    const dinnerData = item.filter(x => x.category === "Dinner");
    console.log(dinnerData)
    const first3 = dinnerData.slice(0, 3);

    const last3 = dinnerData.slice(3, 6);


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

                    ></MenuPage>
                })}

            </div>
        </div>
    );

};

export default DinnerPage;