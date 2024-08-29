import React, { useState } from 'react';
import '../css/profile.css';
import Bar from "./Bar";
import Footer from "./Footer";
import CardForSlider from './SlideCard';
import bannerImg from './imgages/home3.png';
import {useNavigate} from "react-router-dom";


export default function Profile(){
    const navigate = useNavigate();
    const [curent, setCurent] = useState('edit')
    const [inputValue, setInputValue] = useState('');
    const [active, setActive] = useState('')

    const inputs = ['Имя', 'Фамилия', 'Номер Телефона', 'Почта']
    const types = ['text', 'text', 'number', 'email']
    const cards = [bannerImg,bannerImg,bannerImg,bannerImg,bannerImg,bannerImg]


    const exit = () => {
        navigate('/');
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const showCurent = () => {

        // eslint-disable-next-line default-case
        switch (curent){
            case 'edit':
                return (<div className={'edit'}>
                    <div className={'edit-container'}>

                        {inputs.map((input, index) => {
                         return(
                            <div className="input-container">
                                <p className={inputValue !== ''? 'active': ''}>{input}</p>
                                <input onChange={handleInputChange} type={types.at(index)} placeholder={input}/>
                            </div>
                        );
                        })}

                        <button>Сохранить изменения</button>
                    </div>
                </div>);
            case 'order':
                return (<div className={'order'}>
                    <div className="order-container">
                    {cards.map((card)=>{
                        return(<CardForSlider imageUrl={card}/>);
                    })}
                    </div>
                </div>);
            case 'fav':
                return (<div className={'fav'}>
                    <div className="fav-container">
                        {cards.map((card) => {
                            return (<CardForSlider imageUrl={card}/>);
                        })}
                    </div>
                </div>);
        }

    }

    return (<div>
        <Bar/>
        <div className="profile">
            <h1>Профиль</h1>
            <div className="prof-bar">
                <button onClick={event => setCurent('edit') }>Редактирование профиля</button>
                <button onClick={event => setCurent('order')}>Мои заказы</button>
                <button onClick={event => setCurent('fav')}>Избранное</button>
                <button>Нужна помощь?</button>
                <button className={'exit'} onClick={event => exit()}>Выйти</button>
            </div>
            {showCurent()}
        </div>
        <Footer/>
    </div>);
}