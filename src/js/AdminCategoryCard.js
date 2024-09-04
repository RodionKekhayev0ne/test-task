import React, {useEffect, useState} from 'react';
import AdminBar from "./AdminBar";
import Category from "./Category";
import {useNavigate} from "react-router-dom";
export default function AdminCategoryCard({id}){
    const navigate = useNavigate();
    const [imagePreviews, setImagePreviews] = useState([]);
    const [curentSale, setCurentSale] = useState(null);
    const [activeCat, setActiveCat] = useState('Все');


    const manage = (manageById) => {
        // eslint-disable-next-line no-template-curly-in-string
           navigate(`/admin/items/manage/${manageById}`);
    }

    return(
        <div onClick={event => manage(id)} className='w-[107%] h-[300px] flex flex-col ml-[10%] mt-[5%] items-center'>
            <img className="w-full h-[280px]" src={require("../imgages/cardadmin.png")} alt=""/>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[12px] mr-[25px]">
                    BlogPro - Профессиональный блог ...
                </p>
                <p className="text-[12px]">62 000тг</p>
            </div>
        </div>

    );
}