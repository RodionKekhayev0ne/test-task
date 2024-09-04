import React, { useState } from 'react';
import '../css/profile.css';
import Bar from "./Bar";
import Footer from "./Footer";
import CardForSlider from './SlideCard';
import Order from './Order';
import bannerImg from '../imgages/home3.png';
import {useNavigate} from "react-router-dom";


export default function Profile(){
    const navigate = useNavigate();
    const [curent, setCurent] = useState('edit')
    const [inputValue, setInputValue] = useState('');
    const [active, setActive] = useState('')

    const inputs = ['Имя', 'Фамилия', 'Номер Телефона', 'Почта']
    const types = ['text', 'text', 'number', 'email']
    const cards = [bannerImg,bannerImg,bannerImg,bannerImg,bannerImg,bannerImg]

    const cards2 = [bannerImg,bannerImg,bannerImg,bannerImg,bannerImg,bannerImg,bannerImg,bannerImg,bannerImg,bannerImg]
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
                return (<div className="edit ml-[165px]">
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
                    <div className="order-container ml-[150px]">
                    {cards.map((card)=>{
                        return(<Order imageUrl={card}/>);
                    })}
                    </div>
                </div>);
            case 'fav':
                return (<div className={'fav'}>
                    <div className="fav-container ml-[70px] mt-[100px]">
                        {cards2.map((card) => {
                            return (<CardForSlider imageUrl={card}/>);
                        })}
                    </div>
                </div>);
        }

    }

    return (<div>
        <Bar/>
        <div className="profile">
            <h1 className="ml-[165px]">Профиль</h1>
            <div className="prof-bar ml-[130px]">
                <button onClick={event => setCurent('edit') } style={{color: curent === 'edit'? '#3865F8' : '#303030'}}>Редактирование профиля</button>
                <button onClick={event => setCurent('order')} style={{color: curent === 'order'? '#3865F8' : '#303030'}}>Мои заказы</button>
                <button onClick={event => setCurent('fav')} style={{color: curent === 'fav'? '#3865F8' : '#303030'}}>Избранное</button>
                <button>Нужна помощь?</button>
                <button className={'exit'} onClick={event => exit()}>Выйти</button>
            </div>
            {showCurent()}
        </div>
        <Footer/>
    </div>);
}