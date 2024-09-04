import React, { useState } from 'react';

import PropTypes from "prop-types";
import bannerImg from '../imgages/home3.png';
import BasketCard from "./BasketCard";
function Basket(show){



    const cards = [
        bannerImg,
        bannerImg,
        bannerImg
    ]

    function close (){
        return (<div></div>);
    }

    return (


        <div>

    <div className="z-10  fixed h-[100vh] w-[100%] bg-black bg-opacity-60 flex justify-end">
        <div className="w-[759px] overflow-x-hidden overflow-y-clip bg-white m-0 p-0 ">
            <div className="flex flex-row h-[100px] w-full items-center justify-between">
                <p className="p-0 m-0 text-[25px] ml-14">Корзина <span
                    className="text-[#3865F8]">[{cards.length}]</span></p>
                <button  onClick={event => close()}    className="h-[24px] mr-14  w-[24px] bg-white border-none"><img className="h-[24px] w-[24px]"
                                                                                       src={require("../imgages/close.png")}
                                                                                       alt="close"/></button>
            </div>
            {cards.map((card) => {
                return (
                    <BasketCard imageUrl={card}/>
                );
            })}

        </div>
    </div>

        </div>);
}




export default Basket;