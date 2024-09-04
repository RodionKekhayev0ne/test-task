import React, { useState } from 'react';
import Bar from "./Bar";
import Footer from "./Footer";
import {findAllByDisplayValue} from "@testing-library/react";

export default function FaqQuery({title}){

    const [curent, setCurent] = useState(null)

    const queries = [
        'Какие форматы файлов я получу?',
        'Могу ли я вносить правки в процессе работы?',
        'Какие стили логотипов вы создаете?',
        'Могу ли я использовать логотип в коммерческих целях?',
        'Как происходит оплата?',
    ];

    const answer = 'Вы получите логотип в форматах PNG, JPEG для использования в вебе и печати, а также исходные файлы в формате AI или PSD.';


    const active = {
        opacity: '100',
        maxHeight: '100px',
        transition: '0.7s',
    }

    const nactive = {
        opacity: '0',
        maxHeight: '0',
        margin: '0',
        transition: '0.7s',
    }

    const  buttActive = {
        transform: 'rotate(45deg)',
        transition: '0.7s',
    }

    function open(index){
        if (index === curent){
            setCurent(null)
        }else {
            setCurent(index)
        }
    }


    return(<div>
        <div className="w-[100%] mt-[100px]">
            <p className="font-[700] text-[26px] mb-[10px]">{title}</p>
            {queries.map((query, index) => {
                return(
                    <div key={index} className=" border-l-0 border-r-0 border-t-0  border-b-[0.5px] border-solid  border-[#DCDCDC] mb-0 transition-all duration-200 ease">
                    <div className="flex flex-row h-[80px] items-center "><span className="text-[18px] font-[500] text-[#3865F8]">0{index + 1}</span>
                        <span className="text-[18px] font-[500] ml-[40px]">{query}</span>
                        <a onClick={event => open(index)} className="ml-auto"> <img style={index === curent ? buttActive: { transition: '0.7s',}} src={require('../imgages/plus.png')} alt=""/> </a>
                    </div>
                        <div style={index === curent ? active: nactive} >
                            <p className="text-[16px] font-[400] ml-[60px] w-[60%] mt-0 mb-10 ">{answer}</p>
                        </div>
                    </div>
                );
            })}
        </div>

    </div>);
}