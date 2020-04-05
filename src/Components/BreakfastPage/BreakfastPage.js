import React from 'react';

import MenuPage from '../MenuPage/MenuPage';
import './BreakfastPage.css'
import { useState } from 'react';
import { useEffect } from 'react';



export const exportElement = []

const BreakfastPage = () => {
    const [item, setItem] = useState([])
    useEffect(() => {

        fetch('https://warm-coast-59865.herokuapp.com/foodItems')
            .then(res => res.json())
            .then(data => {
                // console.log("data received", data[0])

                setItem(data)
            })
    }, [])
    const breakfastData = item.filter(x => x.category === 'breakfast');
    const first3 = breakfastData.slice(0, 3)
    const last3 = breakfastData.slice(3, 6)



    const handleItem = (e) => {
        const title = e.target.parentNode.children[2].innerHTML;
        const price = e.target.parentNode.children[4].innerHTML;
        const img = e.target.parentNode.children[0].src
        const category = e.target.parentNode.children[1].innerHTML

        exportElement.push(title, price, img, category)

    }
    return (
        <div className="displayMenu">
            <div className="items-row1">
                {first3.map(item => {
                    return <MenuPage
                        key={item.id}
                        items={item}
                        handleItem={handleItem}
                    ></MenuPage>
                })}



            </div>
            <div className="items-row2">
                {last3.map(item => {
                    return <MenuPage
                        key={item.id}
                        items={item}
                        handleItem={handleItem}
                    ></MenuPage>
                })}

            </div>

        </div>
    );
};


export default BreakfastPage;