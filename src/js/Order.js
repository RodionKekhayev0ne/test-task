import React, { useState } from 'react';

import PropTypes from "prop-types";

function Order({imageUrl}){
    return (
        <div className="h-[256px] w-[664px] flex flex-row p-0 my-[20px]">
            {/*./imgages/banner-img.png*/}
            <img className="w-[272px] h-[256px]" src={imageUrl} alt="card"/>
            <div className="h-[256px] flex flex-col mx-5 items-start justify-around">
                <p className="text-2xl font-bold p-0 m-0">Покупка от 14 сентября 2023</p>
                <p className="text-xs">Номер заказа - <span className="font-bold text-xm">ORD-2024-07-31-987654</span></p>
                <p className="p-0 m-0">Lorem ipsum dolor sit amet consectetur. Sed in pretium ut aliquam pellentesque nam</p>
                <div className="price">
                    <p>7783₸</p><p className="cross-text text-[#A2A2A2]">7783₸</p>
                    <span className="h-[23px] w-[42px] bg-[#3865F8] text-white text-[14px] ml-3 mb-0.5 pl-1 pr-0 no-underline rounded">-20%</span>
                </div>
                <button
                    className="bg-[#3865F8] border-none w-[275px] h-[50px] rounded-[8px] text-white text-[16px] justify-end font-[400]">Скачать архив</button>
            </div>
            </div>
    );
}

Order.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};


export default Order;