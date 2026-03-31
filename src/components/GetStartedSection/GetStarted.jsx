import React from 'react';
import UserIcon from "../../assets/user.png"
import ProductIcon from "../../assets/package.png"
import RocketIcon from "../../assets/rocket.png"
const GetStarted = () => {
    return (
        <div className='w-full pb-30 bg-[#F9FAFC] p-5'>
            <div className='max-w-300 mx-auto flex flex-col gap-10 justify-center items-center '>
                <div className='flex flex-col justify-center items-center gap-4 text-center'>
                    <h2 className='font-extrabold text-[48px]'>Get Started in 3 Steps</h2>
                    <p className='text-[16px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid justify-center items-center gap-7 text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5'>
                    <div className='flex relative flex-col justify-center items-center gap-4 border border-[#F1F1F1] rounded-2xl py-22 px-6 bg-white shadow-md h-full'>
                        <div className='w-8 h-8 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]  absolute flex justify-center items-center top-5 right-5 text-white'>
                            01
                        </div>
                        <img src={UserIcon} alt="" />
                        <h2 className='font-bold text-[24px]'>Create Account</h2>
                        <p className='text-[16px] text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='relative flex flex-col justify-center items-center gap-4 border border-[#F1F1F1] rounded-2xl py-22 px-6 bg-white shadow-md h-full'>
                        <div className='w-8 h-8 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute flex justify-center items-center top-5 right-5 text-white'>
                            02
                        </div>
                        <img src={ProductIcon} alt="" />
                        <h2 className='font-bold text-[24px]'>Choose Products</h2>
                        <p className='text-[16px] text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='relative flex flex-col justify-center items-center gap-4 border border-[#F1F1F1] rounded-2xl py-22 px-6 bg-white shadow-md h-full'>
                        <div className='w-8 h-8 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute flex justify-center items-center top-5 right-5 text-white'>
                            03
                        </div>
                        <img src={RocketIcon} alt="" />
                        <h2 className='font-bold text-[24px]'>Start Creating</h2>
                        <p className='text-[16px] text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default GetStarted;