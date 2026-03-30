import React, { use, useState } from 'react';
import Cards from '../ProductCards/Cards';

const DigitalToolsSection = ({ProductsDataPromise}) => {
    const ProductsData = use(ProductsDataPromise)
    const [selectedState,setSelectedState] = useState('products')
    return (
        <div className='max-w-300 mx-auto my-30 px-5'>
            <div className='flex flex-col justify-center items-center gap-7'>
                <h2 className='font-extrabold text-[48px] text-center'>Premium Digital Tools</h2>
                <p className='text-[16px] text-[#627382] text-center'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center border border-[#F6F6F6] rounded-[100px] p-1'>
                    <button className='btn btn-primary py-3 px-6 font-semibold rounded-[10000px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none'>Products</button>
                    <button className='btn btn-soft border-none bg-white py-3 px-6 font-semibold'>Cart (2)</button>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                    {
                        selectedState === 'products' ? ProductsData.map((products,ind) => {
                            return <Cards key={ind} products={products}></Cards>
                        }) : null
                    }
                </div>
            </div>
        </div>
    );
};

export default DigitalToolsSection;