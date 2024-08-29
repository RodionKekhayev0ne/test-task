import React, { useState } from 'react';
import '../css/Bar.css';
import {useNavigate} from "react-router-dom";

const Bar = () => {
    const navigate = useNavigate();

    const like = () => {
        console.log("like")
    }
    const prof = () => {
        navigate('/profile');

    }
    const basket = () => {
        console.log("basket")
    }
    const home = () => {
        navigate('/home');
    }


    return(
        <div className={'abs-container'}>
        <div className={'mini-bar'}>
            <p>О нас</p>
            <p>FAQ</p>
            <p>Контакты</p>
        </div>
        <div className={'container'}>
            <img className={'logo'} src={require('./imgages/logo.png')} alt="logo" onClick={event => home()}/>
            <input className={'search-bar'} type="text"/>
            <button className={"nav-butt"} onClick={event => like()}><img  src={require("./imgages/like.png")} alt="like"/></button>
            <button className={"nav-butt"} onClick={event => prof()}><img  src={require("./imgages/profile.png")} alt="prof" /></button>
            <button className={"nav-butt"}  onClick={event => basket()}><img src={require("./imgages/basket.png")} alt="basket"/></button>
        </div>
        </div>
    );
}


export default Bar;