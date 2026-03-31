import React from 'react';
import NavLogo from "../../assets/DigiTools.png"
import CartLogo from "../../assets/Cart.png"
const Navbar = ({selectedProducts}) => {
    console.log(selectedProducts)
    return (
        <>
            <div className=' border border-[#F2F2F2] py-6.5 flex justify-center items-center'>
                <div className="flex flex-col md:flex-row max-w-300 mx-auto gap-5 items-center justify-center w-full px-5">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-5">
                        <div>
                            <img src={NavLogo} alt="" />
                        </div>
                        <ul className="menu-horizontal px-1 gap-4 text-[16px]">
                            <li>Products</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                            <li>FAQ</li>
                        </ul>
                        <div className='flex justify-center items-center gap-4'>
                            <div className='relative'>
                                <img src={CartLogo} alt="" width={20} height={20}/>
                                {
                                    selectedProducts.length > 0  && <div className='rounded-[50%] h-5 w-5 bg-red-600 text-[9px] flex items-center justify-center text-white p-1 absolute -top-3.75 -right-3 text-center'>{selectedProducts.length}</div>
                                }
                                
                            </div>
                            <p>Login</p>
                            <button className='btn btn-primary hover:scale-105 transition duration-300 py-3 px-4 font-semibold rounded-[10000px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Navbar;