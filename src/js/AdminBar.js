import React, {useEffect, useState} from 'react';
import AdminCategory from "./AdminCategory";
import AdminItemsManage from "./AdminItemsManage";
import {useNavigate} from "react-router-dom";
export default function AdminBar({curentData}){

    const [curent, setCurent] = useState(curentData)
    const navigate = useNavigate();
    const activeButt = {
        borderBottom: '2px #3865F8 solid',
        transition: '0.7s ease',
    }
    const nactiveButt = {
        borderBottom: '2px #ffffff solid',
        transition: '0.7s ease',
    }





    const changePage = (path) => {
        navigate(`/admin/${path}`);
    }




    const navs= [
        {name: 'Управление категориями', currentType: 'home'},
        {name: 'Управление товарами', currentType: 'items'},
        {name: 'Смена пароля', currentType: 'password'},
    ]



    return(<div>
            <div className="h-[75px] w-full flex flex-row items-center">
        <a href={'#'} className="ml-[50px]"><img className="h-[30px] w-[177px]" src={require('../imgages/logo.png')} alt=""/></a>
        <div className=" w-[70%] h-[75px] flex flex-row justify-center items-center">
            {navs.map((nav, index) =>{
                return (
                    <button key={index}
                        className="h-[75px] border-none bg-white font-[500] text-[20px] ml-[20px] mb-0 pb-0"
                            onClick={event => changePage(nav.currentType)}
                        style={nav.currentType === curent ? activeButt : nactiveButt }>{nav.name}</button>
                );
            })}
        </div>
    </div>
        </div>
        );
}
