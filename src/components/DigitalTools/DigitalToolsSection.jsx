import React, { use, useState } from 'react';
import Cards from '../ProductCards/Cards';
import AvailableProducts from '../AvailableProducts/AvailableProducts';
import AvailableCarts from '../AvailableCarts/AvailableCarts';

const DigitalToolsSection = ({selectedProducts,setSelectedProducts,ProductsDataPromise}) => {
    const ProductsData = use(ProductsDataPromise)
    const [selectedState,setSelectedState] = useState('products')
    return (
        <div className='max-w-300 mx-auto my-30 px-5'>
            <div className='flex flex-col justify-center items-center gap-7'>
                <h2 className='font-extrabold text-[48px] text-center'>Premium Digital Tools</h2>
                <p className='text-[16px] text-[#627382] text-center'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center border border-[#F6F6F6] rounded-[100px] p-2 shadow-sm'>
                    <button onClick={
                        () => {
                            setSelectedState('products')
                        }
                    } className={`btn py-3 px-6 font-semibold rounded-[1000px]  ${selectedState === 'products' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent text-black"} border-none`}>Products</button>
                    <button onClick={
                        () => {
                            setSelectedState('cart')
                        }
                    } className={`btn btn-soft border-none ${selectedState === 'cart' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent text-black"} py-3 px-6 font-semibold rounded-[1000px]`}>Cart ({selectedProducts.length})</button>
                </div>
                {
                    selectedState === 'products' ? <AvailableProducts ProductsData={ProductsData} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></AvailableProducts> 
                    : <AvailableCarts selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></AvailableCarts>
                }
            </div>
        </div>
    );
};

export default DigitalToolsSection;