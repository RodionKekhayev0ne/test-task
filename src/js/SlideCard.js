import React, { useState } from 'react';
import '../css/card.css';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

export default function CardForSlider({imageUrl}){
    const navigate = useNavigate();
    function goCard() { // Убедитесь, что это именно React-компонент
        navigate('/card');
    }

    return(
        <div className="banner-card">
            {/*./imgages/banner-img.png*/}
            <div><img src={imageUrl} alt="card"/></div>
            <div className="price">
                <p>7783₸</p><p className={'cross-text'}>7783₸</p>
            </div>
            <div><p>Lorem ipsum dolor sit amet...</p></div>
            <button onClick={event => goCard()}>Купить</button>
        </div>
    );
}
CardForSlider.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};


