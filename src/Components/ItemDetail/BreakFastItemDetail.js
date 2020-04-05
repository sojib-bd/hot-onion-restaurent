import React from 'react';
import { exportElement } from '../BreakfastPage/BreakfastPage';


const ItemDetail = () => {
    const detail = exportElement;
    console.log("detail", detail)

    const myStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',


    }

    return (
        <div style={myStyle}>
            <div className="detail-left">
                <h1>{detail[0]}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque exercitationem laboriosam explicabo doloremque. Consequatur ipsum non impedit recusandae soluta atque nihil. Maxime expedita voluptatem quo commodi aspernatur a dolore.</p>
                <h5>{detail[1]}</h5><span><button>Add</button></span>

            </div>
            <div className="detail-right">
                <img src={detail[2]} alt="" />
            </div>
        </div>
    );
}


export default ItemDetail;