import React from 'react';
import Check from "../../assets/Check.png"
import iconMap from "../../assets/iconMap/IconMap";
import { toast } from 'react-toastify';
const Cards = ({selectedProducts,products,setSelectedProducts}) => {
    const baseClass =
        "rounded-[1000px] absolute top-2.5 right-2.5 px-3 py-1 font-medium";

    const tagStyles = {
        "Best Seller": "bg-[#fef3c6] text-[#cc7732]",
        "New": "bg-[#dbfce7] text-[#3ea568]",
        "Popular": "bg-[#e1e7ff] text-[#8f56fa]",
    };
    const inCart = selectedProducts.some(product => product.id === products.id)
    const tagClass = tagStyles[products.tag] || "bg-gray-100 text-gray-600";
    return (
        <div className='flex flex-col items-start justify-start gap-4 border border-[#F2F2F2] p-6 rounded-2xl relative shadow-md'>
            <div className={`${baseClass} ${tagClass}`}>
                {products.tag}
            </div>
        
            <div className='flex items-center justify-center rounded-[50%] max-h-60 max-w-60 border border-[#F2F2F2] p-2 '>
                <img src={iconMap[products.icon]} alt="" />
            </div>
            <h2 className='font-bold text-[24px]'>{products.name}</h2>
            <p className='text-[16px] text-[#627382]'>{products.description}</p>
            <p><span className='font-bold text-[24px]'>${products.price}</span>/Mo</p>
            <div className='flex flex-col justify-center items-start flex-1'>
                {
                    products.features.map((features,index) => {
                    return (<div key={index} className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#627382]'>{features}</p>
                    </div>)
                    })
                }
                
            </div>
            <button onClick={
                () => {
                    const exists = selectedProducts.find(p => p.id === products.id);
                    if (!exists) {
                        setSelectedProducts([...selectedProducts, products]);
                        toast.success("Product added to cart !", {
                            position: "top-right"
                            });
                    }else{
                        toast.error("Product already added !", {
                            position: "top-right"
                            });
                        }
                    }
                    
        } className={`btn btn-primary text-[16px] ${inCart  ? "bg-green-600" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} text-white border-none w-full rounded-4xl`}>{ inCart ? "Added to cart" : "But Now"}</button>
        </div>
    );
};

export default Cards;