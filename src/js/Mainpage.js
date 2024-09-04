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
import bannerImg from '../imgages/banner-img.png';
import Category from "./Category";

const Mainpage = () => {


    const [activeCat, setActiveCat] = useState('Все');
    const titles = [
        'Экспресс-дизайн логотипов на заказ',
        'Идеальные логотипы под заказ',
        'Профессиональные логотипы быстро и качественно',
        'Экспресс-дизайн логотипов на заказ',
    ]

    const categories = [
        'Все',
        'Минималистичные',
        'Абстрактные',
        'Ретро',
        'Монограммные',
        'Маскот',
        'Натуральные',
        'Технологичные',
        'Стартапы',
    ]



        return (
            <div>
                <Bar/>
                 <div className="home-banner">
                     <div className="home-container">
                    <div className="banner-text ml-0 mr-52">
                        <h1>Lorem ipsum dolor sit amet consectetur. In senectus et</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Odio id nullam egestas quis vestibulum elit lorem urna. Massa morbi vitae egestas eget morbi.</p>
                        <button className="h-[60px] w-[35%] border-none bg-[#3865F8] text-white rounded-[100px] text-[18px] font-[500]">Посмотреть предложение</button>
                    </div>
                         <Card imageUrl={bannerImg}/>
                     </div>
                 </div>
                <div className="category mt-[10%]">
                    {categories.map((category, index) => {
                        return (<button className="rounded" key={index} onClick={event => setActiveCat(category)}
                        style={activeCat === category ? {color:'#ffffff',backgroundColor:'#3865F8'}: {color:'#3865F8', backgroundColor: '#EFEFEF'}}>{category}</button>);
                    })}
                </div>

                {activeCat === 'Все' ?
                    titles.map((title, index) => (
                           <HomeSlider title={title}/>
                        )): <Category cat={activeCat} type={'user'}/>}


              <Footer/>
            </div>
        );

}
export default Mainpage;