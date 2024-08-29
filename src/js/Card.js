import React, { useState } from 'react';
import '../css/card.css';
import PropTypes from "prop-types";

function Card({imageUrl}){
    return(
            <div className="banner-card">
                {/*./imgages/banner-img.png*/}
                <div><img src={imageUrl} alt="card"/></div>
                <div className="price">
                    <p>7783₸</p><p className={'cross-text'}>7783₸</p>
                </div>
                <div><p>Lorem ipsum dolor sit amet...</p></div>
            </div>
    );
}
Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};


export default Card;