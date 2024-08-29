import React, { useState } from 'react';
import '../css/FullCard.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import Bar from "./Bar";
import HomeSlider from "./HomeSlider";
import sImg from './imgages/fullcard.png';
import vImg from  './imgages/vslider.png';
import Slider from "react-slick";
export default function FullCard(){
    const buttStyle = {
        height: '46px',
        width: '46px',
        zIndex: 5,
    };
    const buttStyleHP = {
        height: '46px',
        width: '46px',
        zIndex: 5,
        transform: 'rotate(180deg)',
    };
    const buttStyleN = {
        height: '46px',
        width: '46px',
        zIndex: '4!important',
        transform: 'rotate(90deg)',

    };
    const buttStyleP = {
        height: '46px',
        width: '46px',
        transform: 'rotate(-90deg)',
        zIndex: '4!important',
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Отображаем 3 слайда одновременно
        slidesToScroll: 1,
        centerMode: true, // Активируем центрирование
        centerPadding: '0',
        prevArrow: <button className="slick-prev"><img src={require("./imgages/next.png")} style={buttStyleHP} alt="next"/></button>,
        nextArrow: <button className="slick-next"><img src={require("./imgages/next.png")} style={buttStyle} alt="next"/></button>,
    };

    const settingsVert = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Количество видимых слайдов
        slidesToScroll: 1,
        horizontally: false,
        vertical: true, // Активируем вертикальный режим
        verticalSwiping: true, // Активируем вертикальное пролистывание
        prevArrow: <button className="slick-next"><img src={require("./imgages/next.png")} style={buttStyleP} alt="next"/></button>,
        nextArrow: <button className="slick-prev"><img src={require("./imgages/next.png")} style={buttStyleN} alt="next"/></button>,
    };
    const images = [
        sImg,
        sImg,
        sImg,
        sImg,
        sImg,
    ];
    const vimages = [
        vImg,
        vImg,
        vImg,
        vImg,
        vImg,
    ];
    return(
        <div>
            <Bar/>
            <div className="fullcard">
                <div className="img-bar">
                    <Slider {...settingsVert}>

                        {vimages.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index}`}/>
                            </div>
                        ))}

                    </Slider>
                </div>
                <div className={'card-container'}>
                    <Slider {...settings}>

                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index}`}/>
                        </div>
                    ))}

                </Slider>
            </div>
                <div className="fullcard-text">
                    <h1>Lorem ipsum dolor sit amet consectetur. Amet gravida magna turpis integer</h1>
                    <div className="price">
                        <p>7783₸</p><p className={'cross-text'}>7783₸</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Faucibus nisl massa adipiscing blandit eget tempor. Est est morbi in molestie viverra enim nisl congue tempor. Nunc posuere porttitor ipsum id vulputate. Lacus egestas eu</p>
                    <button className={'buy'}>Купить</button>
                    <div className="butt-ln">
                        <button className={'baskt'}>В Корзину</button>
                        <button className={'heart'}><img src={require('./imgages/hert.png')} alt=""/></button>
                    </div>
                    <div className="about">
                        <h2>Описание</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Eget nibh dolor malesuada ante eu sed convallis morbi eget. Facilisis laoreet amet non placerat vitae interdum felis leo. Elementum neque mi neque leo tortor enim dui. Semper luctus duis turpis consequat elit eu sit. </p>
                        <p>Platea morbi enim eu fusce vitae urna ultrices vitae. Pellentesque varius faucibus quis morbi scelerisque nulla. Pretium neque blandit bibendum aliquam ipsum vitae felis amet enim.</p>
                        <p>Ante eu sed convallis morbi eget. Facilisis laoreet amet non placerat vitae interdum felis leo. Elementum neque mi neque leo tortor enim dui. Semper luctus duis turpis consequat elit eu sit. </p>
                    </div>
                </div>
            </div>
            <HomeSlider title={'Похожее что вы искали'}/>
            <Footer/>
        </div>
    );
}