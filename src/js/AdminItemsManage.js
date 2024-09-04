import React, {useEffect, useState} from 'react';
import AdminBar from "./AdminBar";
import {useNavigate, useParams} from "react-router-dom";
export default function AdminItemsManage(){
    const navigate = useNavigate();
    const { itemId } = useParams();

    const [imagePreviews, setImagePreviews] = useState([]);
    const [curentSale, setCurentSale] = useState(null);
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const previews = files.map(file => {
            return URL.createObjectURL(file);
        });

        setImagePreviews(previews);
    };

    function back(){
        navigate('/admin/items/');
    }

    const activeButt = {
        backgroundColor:'#3865F8',
        color:'#fff',
        transition: '0.4s ease',
    }
    const nactiveButt = {
        color:'#000',
        transition: '0.4s ease',
    }


    const sales = [
        '10%','15%','20%','25%',
        '30%','35%','40%','45%',
    ]

    return(
        <div>
            <AdminBar curentData={'items'}/>
            <button onClick={event => back()} className="fixed flex flex-col items-center justify-center top-[25%] left-[50px] border-none rounded-[30px] h-[40px] w-[40px]"><img src={require('../imgages/back.png')} alt=""/></button>
            <div className="w-[100%] flex flex-row items-start justify-center mt-[50px] mb-[100px]">
                <div className="w-[25%]">
                    <p className="text-[18px] font-[500]">Изображение</p>
                    <input
                        type="file"
                        id="file-input"
                        className="hidden"
                        multiple={true}
                        onChange={handleFileChange}
                    />

                    {/* Кастомная кнопка */}
                    <label
                        htmlFor="file-input"
                        className="bg-[#1A1A1A] bg-opacity-[10%] flex items-center justify-center w-[300px] h-[260px] underline rounded">
                        Загрузить
                    </label>

                    {imagePreviews.length > 0 ? (
                        <div className="flex flex-col items-cente justify-center ">
                            {imagePreviews.map((src, index) => (
                                <img src={src} key={index} alt="Preview"
                                     className=" flex items-center justify-center mt-[20px] w-[300px] h-[260px] underline rounded"/>

                            ))}
                        </div>
                    ) : (
                        <span>Нет изображений</span>
                    )}
                </div>
                <div className="flex flex-col w-[35%]">
                    <p className="text-[18px] font-[500]">Заголовок</p>
                    <input type="text" defaultValue={itemId != null ? 'test data id - ' + itemId : 'create new item'}
                           className="bg-[#1A1A1A] bg-opacity-[10%] h-[50px] w-[440px] border-none rounded text-black focus:outline-none pl-[20px] text-[18px] mt-0"/>

                    <p className="text-[18px] font-[500]">Цена</p>
                    <input type="text"
                           className="bg-[#1A1A1A] bg-opacity-[10%] h-[50px] w-[440px] border-none rounded text-black focus:outline-none pl-[20px] text-[18px] mt-0"/>
                    <p className="text-[18px] font-[500]">Скидка</p>
                    <div className=" grid grid-cols-4 gap-[10px] border-none w-[70%]">
                        {sales.map((sale) => {
                            return (
                                <button key={sale}
                                        className="border-none rounded w-[90px] h-[65px] text-[18px] font-[500] mr-0 ml-0"
                                        style={curentSale === sale ? activeButt : nactiveButt}
                                        onClick={event => setCurentSale(sale)}>{sale}</button>
                            );
                        })}
                    </div>
                    <p className="text-[18px] font-[500]">Описание</p>
                    <textarea
                        className=" pt-[5px] text-[18px] font-[500] border-none bg-[#1A1A1A] bg-opacity-[10%] flex items-center justify-center w-[300px] h-[260px] rounded pl-[10px] focus:outline-none"/>
                    <button
                        className=" w-[440px] text-[18px] font-[500] text-white bg-[#3865F8] border-none h-[65px] mt-[30px] rounded">Сохранить
                    </button>
                    <button style={itemId != null ? {display: 'block'} : {display: 'none'}}
                            className="w-[440px] text-[18px] font-[500] border-none h-[65px] mt-[10px] rounded">Удалить
                    </button>
                </div>
            </div>
        </div>

    );
}