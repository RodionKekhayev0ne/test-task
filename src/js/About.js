import React, { useState } from 'react';
import Bar from "./Bar";
import Footer from "./Footer";

export default function About(){


    const inputSlyle = "h-[50px] w-[480px] rounded bg-[#EFEFEF] border-none mt-[30px] placeholder: pl-5 focus: border-b-gray-100 font-[500] text-[16px]"

    return(<div className="">
        <Bar/>
        <div className="flex flex-col w-[90%] ml-[5%]">
            <div className="font-[600] text-[62px] flex flex-col items-center justify-center">
                <p className="p-0 m-0">Lorem ipsum dolor <span className="text-[#3865F8]">sit amet consectetur.</span></p>
                <p className="p-0 m-0">Congue pharetra neque massa ipsum. </p>
                <p className="text-[#3865F8] p-0 m-0" >Molestie phasellus interdum</p>
            </div>
            <div className="w-[90%] ml-[5%]">
                <div className="flex flex-row w-[100%] items-start justify-start">
                    <div className="flex flex-col w-[60%] mt-[150px]">
                        <img className="w-[500px] h-[300px] ml-[100px] " src={require('../imgages/about1.png')} alt=""/>
                        <div className="flex flex-row mt-[100px] justify-center items-center">
                            <img className="w-[365px] h-[415px]" src={require('../imgages/about3.png')} alt=""/>
                            <p className="w-[530px] text-[22px] mt-0 ml-[30px]">Lorem ipsum dolor sit amet consectetur. Sagittis quis bibendum malesuada faucibus massa
                                leo at. Nam sagittis ut id egestas ullamcorper egestas est tristique suspendisse. <br/>
                                <br/> Sollicitudin netus condimentum a in dolor. Risus massa pretium feugiat et semper
                                volutpat. Egestas mattis in gravida suspendisse vivamus et at. Quis vulputate faucibus
                                sed velit eu sagittis risus nec dui.</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-[40%]">
                        <img className="w-[560px] h-auto mt-[140px] ml-[40px]" src={require('../imgages/about2.png')} alt=""/>
                    </div>
                </div>
                <div className="flex flex-row-reverse w-full h-[290px] mt-[120px]">
                    <p className="h-[290px] w-[435px] text-[24px] font-[400]">
                        Lorem ipsum dolor sit amet consectetur. Vulputate sagittis morbi platea hac vestibulum malesuada
                        malesuada tortor aliquam.
                        <br/><br/>
                        Erat adipiscing tempus faucibus ut duis dolor sed. Id purus vivamus amet bibendum quam purus
                        lorem.
                    </p>
                    <p className="h-[290px] w-[435px] text-[24px] font-[400] mr-[50px]">Lorem ipsum dolor sit amet consectetur.
                        Viverra ut pretium magna tellus sodales. Interdum risus et lacus volutpat. Sem et ut
                        pellentesque in ornare sit elit.
                        <br/><br/>
                        Leo vitae dui potenti fames amet posuere amet. Leo metus scelerisque arcu sem. Neque egestas
                        facilisi enim facilisis enim.
                    </p>
                    <div className="w-[435px] h-[290px]"></div>
                </div>
                <div className="flex flex-row w-full h-[290px] mt-[40%] mb-[10%] items-end">
                    <img className="w-[365px] h-[580px] ml-0 mr-[20px] " src={require('../imgages/about4.png')} alt=""/>
                    <img className="w-[365px] h-[580px] ml-0 " src={require('../imgages/about5.png')} alt=""/>
                    <img className="w-[500px] h-[300px] ml-[100px] " src={require('../imgages/about6.png')} alt=""/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>);
}

