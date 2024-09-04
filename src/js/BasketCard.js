import React, { useState } from 'react';

import PropTypes from "prop-types";

function BasketCard({imageUrl}){
    return (
        <div className="h-[160px] w-[655px] flex flex-row p-0 my-20 mx-14">
            {/*./imgages/banner-img.png*/}
            <img className="w-[150px] h-[160px]" src={imageUrl} alt="card"/>
            <div className="h-[160px] flex flex-col mx-5 items-start justify-around">
                <p className="text-2xl font-bold p-0 m-0">Lorem ipsum dolor sit amet consectetur. Amet gravida magna turpis integer это</p>
                <p className="p-0 m-0">Lorem ipsum dolor sit amet consectetur. Sed in pretium ut aliquam pellentesque
                    nam</p>
                <div className="price">
                    <p>7783₸</p><p className="cross-text text-[#A2A2A2]">7783₸</p>
                    <span
                        className="h-[23px] w-[42px] bg-[#3865F8] text-white text-[14px] ml-3 mb-0.5 pl-1 pr-2 no-underline rounded">-20%</span>
                    <button
                        className="border-none flex ml-[90%] bg-white">
                        Удалить
                    </button>
                </div>

            </div>
        </div>
    );
}


export default BasketCard;