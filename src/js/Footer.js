import React, { useState } from 'react';
import '../css/Footer.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Footer(){
    return(
        <div className="flex flex-col bg-[#3865F8]">
            <div className={'foot-container'}>
                <div className={'left'}>
                    <img src={require('../imgages/logo-foot.png')} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur. Sit lectus dictumst tempor malesuada tempus morbi velit
                        sagittis purus. Morbi lectus in at et arcu lorem id</p>
                    <p className={'mark'}></p>
                </div>
                <div className="right">
                    <nav><p>Страницы</p>
                        <li>Главная</li>
                        <li>О нас</li>
                        <li>FAQ</li>
                        <li>Контакты</li>

                    </nav>
                    <nav><p>Категории</p>
                        <li>Минималистичные</li>
                        <li>Абстрактные</li>
                        <li>Ретро</li>
                        <li>Монограммные</li>
                    </nav>
                    <nav>
                        <li>Маскот</li>
                        <li>Натуральные</li>
                        <li>Технологичные</li>
                        <li>Стартапы</li>

                    </nav>
                    <nav>
                        <li>+7 920 012-34-56</li>
                        <li>Innovarix.office@gmail.com</li>
                        <li><span className={'contact'}>Telegram </span> <span className={'contact'}> WhatsApp</span>
                        </li>

                    </nav>
                </div>
            </div>
            <div className="w-full flex flex-row items-center">
                <p className="no-underline text-white  text-[16px] font-[500] mr-auto ml-[3%]">© Copyright 2024 Site.pro</p>
                <a href="" className="no-underline text-white  text-[16px] font-[500] mr-[7.5%]">Политика конфиденциальности</a>
                <a href="" className="no-underline text-white  text-[16px] font-[500] mr-[22%]">Публичная Оферта</a>
            </div>
        </div>);
}