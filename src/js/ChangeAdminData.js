import React, {useState} from "react";
import AdminCategoryCard from "./AdminCategoryCard";
import AdminBar from "./AdminBar";
export default function ChangeAdminData({cat,type}){




    return (
        <div>
            <AdminBar curentData={'password'}/>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <p className="text-[24px] font-[500]">Смена данных</p>
                <div className="flex flex-col w-[30%] items-start">
                    <p className="text-[18px] font-[500]">Новый логин</p>
                    <input type="text"
                           className="bg-[#1A1A1A] bg-opacity-[10%] h-[50px] w-[440px] border-none rounded text-black focus:outline-none pl-[20px] text-[18px] mt-0"/>
                    <p className="text-[18px] font-[500]">Новый пароль</p>
                    <input type="text"
                           className="bg-[#1A1A1A] bg-opacity-[10%] h-[50px] w-[440px] border-none rounded text-black focus:outline-none pl-[20px] text-[18px] mt-0"/>
                    <button className="h-[65px] w-[100%] border-none bg-[#3865F8] text-white text-[18px] font-[500] rounded-[8px] mt-[60px]">Сохранить</button>
                </div>
            </div>
        </div>
    );
}