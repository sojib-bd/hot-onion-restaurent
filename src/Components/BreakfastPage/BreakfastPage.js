import React from 'react';
import fakeData from '../fakeData';
import MenuPage from '../MenuPage/MenuPage';
import './BreakfastPage.css'

const BreakfastPage = () => {
    const breakfastData = fakeData.filter(x => x.category === 'breakfast');
    const first3 = breakfastData.slice(0, 3);
    const last3 = breakfastData.slice(3, 6)

    console.log(breakfastData)
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


export default BreakfastPage;