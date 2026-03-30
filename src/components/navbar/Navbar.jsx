import React from 'react';
import NavLogo from "../../assets/DigiTools.png"
import CartLogo from "../../assets/Cart.png"
const Navbar = () => {
    return (
        <>
            <div className=' border border-[#F2F2F2] py-6.5 flex justify-center items-center '>
                <div className="navbar bg-base-100 max-w-300 mx-auto">
                    <div className="navbar-start">
                        <img src={NavLogo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-6 text-[16px]">
                            <li>Products</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='flex justify-center items-center gap-4'>
                            <img src={CartLogo} alt="" />
                            <p>Login</p>
                            <button className='btn btn-primary py-3 px-4 font-semibold rounded-[10000px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Navbar;