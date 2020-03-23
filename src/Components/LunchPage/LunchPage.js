import React from 'react';
import fakeData from '../fakeData';
import MenuPage from '../MenuPage/MenuPage';

const LunchPage = () => {
    const lunchData = fakeData.filter(x => x.category === "Lunch");

    const first3 = lunchData.slice(0, 3);

    const last3 = lunchData.slice(3, 6);
    console.log(first3, last3)
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