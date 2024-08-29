import React, { useState } from 'react';
import '../css/home.css';
import '../css/card.css';
import Bar from "./Bar";
import Card from './Card';
import HomeSlider from "./HomeSlider";
import Footer from "./Footer";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from './imgages/banner-img.png';
const Mainpage = () => {

    let titles = [
        'Экспресс-дизайн логотипов на заказ',
        'Идеальные логотипы под заказ',
        'Профессиональные логотипы быстро и качественно',
        'Экспресс-дизайн логотипов на заказ',
    ]

        return (
            <div>
                <Bar/>
                 <div className="home-banner">
                     <div className="home-container">
                    <div className="banner-text">
                        <h1>Lorem ipsum dolor sit amet consectetur. In senectus et</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Odio id nullam egestas quis vestibulum elit lorem urna. Massa morbi vitae egestas eget morbi.</p>
                    </div>
                         <Card imageUrl={bannerImg}/>
                     </div>
                 </div>
                <div className="category">
                    <button>Все</button>
                    <button>Минималистичные</button>
                    <button>Абстрактные</button>
                    <button>Ретро</button>
                    <button>Монограммные</button>
                    <button>Маскот</button>
                    <button>Натуральные</button>
                    <button>Технологичные</button>
                    <button>Стартапы</button>
                </div>

                {titles.map((title, index) => (
                    <HomeSlider title={title}/>
                ))}
              <Footer/>
            </div>
        );

}
export default Mainpage;