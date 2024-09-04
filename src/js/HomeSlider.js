import React, { useState } from 'react';
import '../css/homeslider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardForSlider from './SlideCard';
import bannerImg from '../imgages/banner-img.png';
import * as PropTypes from "prop-types";
import {unstable_renderSubtreeIntoContainer} from "react-dom";



const HomeSlider = ({title}) =>{
    const buttStyle = {
      height: '46px',
      width: '46px',

    };
    const settings = {
        dots: false, // Отображение индикаторов
        nextArrow: <button className="slick-next"><img src={require("../imgages/next.png")} alt="next" style={buttStyle}/>
        </button>,
        infinite: true, // Бесконечный слайдер
        speed: 500, // Скорость анимации
        slidesToShow: 5, // Количество слайдов для показа по умолчанию
        slidesToScroll: 1, // Количество слайдов для прокрутки за раз
    };

    return (
        <div className={'mega-container'}>
            <h1>{title}</h1>
        <div className={'slider-container'}>
            <Slider {...settings}>
                <CardForSlider imageUrl={bannerImg}/>
                <CardForSlider imageUrl={bannerImg}/>
                <CardForSlider imageUrl={bannerImg}/>
                <CardForSlider imageUrl={bannerImg}/>
                <CardForSlider imageUrl={bannerImg}/>
            </Slider>
        </div>
        </div>
    );

}
HomeSlider.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};
export default HomeSlider;