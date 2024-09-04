import React, { useState } from 'react';
import '../css/Bar.css';
import {useNavigate} from "react-router-dom";
import basket from "./Basket";
import Basket from "./Basket";
import {logDOM, render} from "@testing-library/react";
import BasketCard from "./BasketCard";
import bannerImg from "../imgages/home3.png";

const Bar = () => {
    const navigate = useNavigate();

    const [showBasket, setShowbasket] = useState(false)

    const like = () => {
        console.log("like")
    }
    const prof = () => {
        navigate('/profile');

    }

    const contact = () => {
        navigate('/contact');

    }
    const about = () => {
        navigate('/about');

    }
    const faq = () => {
        navigate('/faq');

    }
    const cards = [
        bannerImg,
        bannerImg,
        bannerImg
    ]
    function basket () {
        return (
            <div className="z-10  fixed h-[100vh] w-[100%] bg-black bg-opacity-60 flex justify-end">
                <div className="overflow-x-hidden overflow-y-auto  h-[100vh] bg-white no-scrollbar">
                    <div className="w-[759px] h-auto bg-white m-0 p-0 no-scrollbar ">
                        <div
                            className="flex flex-row h-[100px] w-full items-center justify-between border-l-0 border-r-0 border-t-0  border-b-1 border-solid  border-[#DCDCDC]">
                            <p className="p-0 m-0 text-[25px] ml-14">Корзина <span
                                className="text-[#3865F8]">[{cards.length}]</span></p>
                            <button onClick={event => setShowbasket(false)}
                                    className="h-[24px] mr-14  w-[24px] bg-white border-none">
                                <img className="h-[24px] w-[24px]"
                                     src={require("../imgages/close.png")}
                                     alt="close"/></button>
                        </div>
                        {cards.map((card) => {
                            return (
                                <BasketCard imageUrl={card}/>
                            );
                        })}

                    </div>
                    <div className="border-l-0 border-r-0 border-t-1
                    border-b-0 border-solid  border-[#DCDCDC]
                    h-[200px] w-full">

                        <div className="w-full flex flex-row justify-between text-[26px] font-[600] mt-10">
                            <span className="ml-[10%]">Итог:</span>
                            <span className="mr-[10%]">180 000тг</span>
                        </div>
                        <button className=" mt-10 bg-[#3865F8] w-[80%] h-[50px] border-none rounded text-white text-[16px] font-[600] ml-[10%]">Купить</button>
                    </div>

                </div>
            </div>
        );
    }

    const home = () => {
        navigate('/home');
    }


    return (
        <div className="">

            {showBasket ? basket() : <div></div>}
            <div className="abs-container">
                <div className={'mini-bar'}>
                    <a onClick={event => about()}  className="text-black px-8 no-underline cursor-pointer">О нас</a>
                    <a onClick={event => faq()}  className="text-black px-8 no-underline cursor-pointer">FAQ</a>
                    <a onClick={event => contact()} className="text-black px-8 no-underline cursor-pointer">Контакты</a>
                </div>
                <div className={'container'}>
                    <img className={'logo'} src={require('../imgages/logo.png')} alt="logo" onClick={event => home()}/>
                    <input className={'search-bar'} type="text"/>
                    <button className={"nav-butt"} onClick={event => like()}><img src={require("../imgages/like.png")}
                                                                                  alt="like"/></button>
                    <button className={"nav-butt"} onClick={event => prof()}><img
                        src={require("../imgages/profile.png")} alt="prof"/></button>
                    <button className={"nav-butt"} onClick={event => setShowbasket(!showBasket)}><img
                        src={require("../imgages/basket.png")} alt="basket"/></button>
                </div>
            </div>

        </div>
    );
}


export default Bar;