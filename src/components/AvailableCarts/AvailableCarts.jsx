import React from 'react';
import iconMap from '../../assets/iconMap/IconMap';
import CartLogo from "../../assets/ShopingCart.png"
import { toast } from 'react-toastify';
const AvailableCarts = ({selectedProducts,setSelectedProducts}) => {
    return (
            <div className='grid grid-cols-1 gap-6 bg-[#ffffff] p-10 rounded-2xl w-full'>
            <p className='font-bold text-[24px]'>Your Cart</p>
            {
                selectedProducts.length > 0 ? (<>
                    {
                        selectedProducts.map((products,ind) => {
                            return (
                                <div key={ind} className='bg-[#f9fafc] flex justify-between items-center p-5 rounded-2xl'>
                                    <div className='flex justify-center items-center gap-4'>
                                        <div className='flex items-center justify-center rounded-[50%] max-h-60 max-w-60 border border-[#F2F2F2] p-2 '>
                                            <img src={iconMap[products.icon]} alt="" />
                                        </div>
                                        <div>
                                            <h2>{products.name}</h2>
                                            <p>${products.price}</p>
                                        </div>
                                    </div>
                                    <button onClick={()  => {
                                            setSelectedProducts(pre => pre.filter(product => products.id !== product.id))
                                            toast.success("Product removed from cart !", {
                                                position: "top-right"
                                            });
                                        }
                                    } className='btn btn-soft bg-red-500 rounded-4xl text-white'>Remove</button>
                                </div>
                            )
                        })
                    }
                    <div className='flex justify-between items-center'>
                        <p className='text-[16px] text-[#627382]'>Total:</p>
                        <p className='font-bold text-[24px]'>${selectedProducts.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue.price
                        },0)}</p>
                    </div>
                    <button onClick={
                        () => {
                            setSelectedProducts([])
                            toast.success("Checkout successfull !", {
                                position: "top-right"
                            });
                        }
                    } className='btn btn-primary text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none w-full rounded-4xl'>Proceed to Checkout</button>
                </>) : 
                
                <div className='flex flex-col justify-center items-center gap-4 text-center'>
                    <img src={CartLogo} alt="" width={100} height={100}/>
                    <p>Your Cart is empty</p>
                </div>
            }
        </div>
    );
};

export default AvailableCarts;