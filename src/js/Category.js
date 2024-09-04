import React, {useState} from "react";
import AdminCategoryCard from "./AdminCategoryCard";
export default function Category({cat,type}){

    const cardlist = [
        'Минималистичные',
        'Минималистичные',
        'Абстрактные',
        'Абстрактные',
        'Ретро',
        'Монограммные',
        'Монограммные',
        'Монограммные',
        'Маскот',
        'Натуральные',
        'Технологичные',
        'Технологичные',
        'Технологичные',
        'Технологичные',
        'Стартапы',
    ]


    return (
        <div>
            {type === 'user' ? <p>For users {cat}</p>:
                <div className="w-[95%] grid grid-cols-5 gap-5">

                    {cat === 'Все'?
                        cardlist.map((card, index) => {
                            return(<AdminCategoryCard id={index}/>);
                    }): cardlist.filter(card => card === cat).map((card, index) => {
                            return(<AdminCategoryCard id={index}/>);
                        })}

                </div>
            }
        </div>
    );
}