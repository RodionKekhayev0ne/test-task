import React, { useState } from 'react';
export default function AdminCategory(){

    const records = [
        'Социальные сети',
        'Социальные сети',
        'Социальные сети',
        'Социальные сети',
        'Социальные сети',
        'Социальные сети',
        'Социальные сети',
        'Социальные сети',
        'Социальные сети',
        'Социальные сети'
    ]

    return(
        <div className="w-[100%] flex flex-col items-center justify-center mt-[50px]">
            <p className="text-[24px] font-[600]">Добавить категорию</p>
            <div className="flex flex-col justify-start items-start w-[460px]">
                <p className="text-[18px] font-[500] mb-[5px]">Впишите категорию </p>
                <input type="text" className="bg-[#1A1A1A] bg-opacity-[10%] h-[50px] w-[440px] border-none rounded text-black focus:outline-none pl-[20px] text-[18px] mt-0"/>
                <button className="bg-[#3865F8] h-[50px] w-full border-solid border-[2px] border-[#3865F8] rounded mt-[40px] text-white text-[18px] font-[500] transition-all  hover:bg-white hover:text-[#3865F8]  duration-500">Сохранить</button>
            </div>
            <p className="text-[24px] font-[600] mt-[100px]">Доступные категории</p>
            <div className="grid grid-cols-2 gap-[30px] w-[80%]">
                {
                    records.map((record) =>{
                        return(
                            <div
                                className="h-[60px] w-[90%] bg-[#EFEFEF] rounded flex flex-row items-center pl-[20px] justify-end">
                                <p className='mr-auto font-[500] text-[16px]'>{record}</p>
                                <button className='mr-[10px] underline border-none bg-none text-[16px] font-[500]' >Редактировать</button>
                                <button className='mr-[10px] text-[#D32323] border-none bg-none text-[16px] font-[500]'>Удалить</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>


    );
}
