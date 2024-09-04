import React, { useState } from 'react';
import Bar from "./Bar";
import Footer from "./Footer";
import FaqQuery from "./FaqQuery";
export default function Faq(){

    const titles = [
        'Похожее что вы искали',
        'Использование и права'
    ]

    return(<div>
        <Bar/>
           <div className="w-[60%] ml-[11%]">
               <p className="font-[600] text-[62px] mb-[10px]">FAQ</p>
               <p className="font-[400] text-[24] mt-0 w-[60%]">Lorem ipsum dolor sit amet consectetur. Odio id nullam egestas quis vestibulum elit lorem urna. Massa morbi vitae egestas eget morbi.</p>
               {titles.map((title, index) =>{
                   return(<FaqQuery title={title}/>);
               })}

           </div>
        <Footer/>
    </div>);
}
