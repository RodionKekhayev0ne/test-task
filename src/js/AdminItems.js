import React, {useEffect, useState} from 'react';
import AdminBar from "./AdminBar";
import Category from "./Category";
import {useNavigate} from "react-router-dom";
export default function AdminItems(){
    const navigate = useNavigate();
    const [imagePreviews, setImagePreviews] = useState([]);
    const [curentSale, setCurentSale] = useState(null);
    const [activeCat, setActiveCat] = useState('Все');
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const previews = files.map(file => {
            return URL.createObjectURL(file);
        });

        setImagePreviews(previews);
    };

    const activeButt = {
        backgroundColor:'#3865F8',
        color:'#fff',
        transition: '0.4s ease',
    }
    const nactiveButt = {
        color:'#000',
        transition: '0.4s ease',
    }

    function createCard(){
        navigate('/admin/items/manage/');
    }

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
    return(
        <div>
            <AdminBar curentData={'items'}/>
            <div className="w-[100%] flex flex-col items-center justify-center mt-[50px]">
                <p className="text-[24px] font-[600]">По категориям</p>
                <div className="category">
                    {categories.map((category, index) => {
                        return (<button className="rounded" key={index} onClick={event => setActiveCat(category)}
                                        style={activeCat === category ? {
                                            color: '#ffffff',
                                            backgroundColor: '#3865F8'
                                        } : {color: '#3865F8', backgroundColor: '#EFEFEF'}}>{category}</button>);
                    })}
                </div>
                  <Category cat={activeCat}/>
                  <button onClick={event => createCard()} className=" text-white text-[18px] font-[500] fixed bottom-[5%] left-[35%] h-[65px] w-[30%] border-none rounded-[8px] bg-[#3865F8]">Добавить товар</button>
            </div>
        </div>

    );
}