import React, { useState } from 'react';
import Bar from "./Bar";
import Footer from "./Footer";

export default function Contact(){


    const inputSlyle = "h-[50px] w-[480px] rounded bg-[#EFEFEF] border-none mt-[30px] placeholder: pl-5 focus: border-b-gray-100 font-[500] text-[16px]"

    return(<div className="">
           <Bar/>
        <div className="w-[60%] flex flex-col ml-[170px] pb-[100px]">
            <p className="text-[62px] font-[600] mb-5">Контакты</p>
            <p className="text-[24px] mt-0">Lorem ipsum dolor sit amet consectetur. Odio id nullam egestas quis vestibulum elit lorem urna. Massa morbi vitae egestas eget morbi.</p>
            <div className='grid grid-cols-2 w-[60%]'>
                <div className="w-[100%] mr-[50px]">
                    <p className="text-[26px] font-[700] mb-0">Телефон</p>
                    <p className="text-[18px] font-[500] mt-5 mb-0">+7 (495) 123-45-67</p>
                    <p className="text-[18px] font-[500] mt-5">+7 (775) 243-65-45</p>
                </div>
                <div className="w-[100%] ml-[100px]">
                    <p className="text-[26px] font-[700] mb-0">Социальные сети:</p>
                    <p className="text-[18px] font-[500] mt-5 mb-0">Telegram</p>
                    <p className="text-[18px] font-[500] mt-5">Instagram</p>
                </div>
                <div className="w-[100%] mr-[50px]">
                    <p className="text-[26px] font-[700] mb-0">Адрес офиса:</p>
                    <p className="text-[18px] font-[500] mt-5 mb-0">ул. Ленина, д. 42, офис 5,<br/>Москва, Россия, 123456</p>

                </div>
                <div className="w-[100%] ml-[100px]">
                    <p className="text-[26px] font-[700] mb-0">Электронная почта:</p>
                    <p className="text-[18px] font-[500] mt-5 mb-0">approcket@gmail.com</p>
                </div>

            </div>
            <div className="flex flex-row mt-[70px]">
                <img className="w-[720px] h-[655px]" src={require('../imgages/contact.png')} alt=""/>
                <div className="h-[655px] w-[480px] flex flex-col ml-[70px]">
                    <p className="font-[700] text-[26px] mt-0 mb-0">Свяжитесь с нами</p>
                    <p className="font-[400] text-[16px] mt-0 w-[70%]">Пожалуйста, заполните форму ниже, и мы свяжемся с
                        вами в ближайшее время</p>
                    <input className={inputSlyle} placeholder={'Имя'} type="text"/>
                    <input className={inputSlyle} placeholder={'Фамилия'} type="text"/>
                    <input className={inputSlyle} placeholder={'Почта'} type="email"/>
                    <input className={inputSlyle} placeholder={'Телефон'} type="tel"/>
                    <input className={inputSlyle} placeholder={'Комментарий'} type="text"/>
                    <button
                        className="h-[50px] w-[500px] rounded bg-[#3865F8] border-none mt-[60px] text-white text-[16px] font-[600]">Отправить
                        сообщение
                    </button>
                    <div className="data">
                        <input className="" type="checkbox"/>
                        <p className="text-black py-0 my-0">Нажимая на кнопку «Отправить сообщение», вы соглашаетесь на
                            обработку ваших <a href={"#"} className="text-[#3865F8] py-0 no-underline"> Персональных данных</a></p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>);
}


