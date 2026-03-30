import React from 'react';
import Check from "../../assets/Check.png"
const Cards = ({products}) => {
    return (
        <div className='flex flex-col items-start justify-start gap-4 border border-[#F2F2F2] p-6 rounded-[16px] max-w-[380px] max-h-[422px] relative'>
            <div className='rounded-[1000px] bg-[#DBFCE7] text-[#0A883E] absolute top-[10px] right-[10px] px-3 py-1'>New</div>
            <div className='rounded-full h-[60px] w-[60px]'>
                <img src="" alt="" />
            </div>
            <h2 className='font-bold text-[24px]'>{products.name}</h2>
            <p className='text-[16px] text-[#627382]'>{products.description}</p>
            <p>${products.price}/Mo</p>
            <div className='flex flex-col justify-center items-start'>
                {
                    products.features.map((features,index) => {
                    return (<div key={index} className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#627382]'>{features}</p>
                    </div>)
                    })
                }
                
            </div>
            <button className='btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none w-full rounded-4xl'>Buy Now</button>
        </div>
    );
};

export default Cards;