import React from 'react';
import Check from "../../assets/Check.png"
const Pricing = () => {
    return (
        <div className='max-w-300 mx-auto flex flex-col gap-10 justify-center items-center py-30'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h2 className='font-extrabold text-[48px]'>Simple, Transparent Pricing</h2>
                <p className='text-[16px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='flex justify-center items-center gap-7 text-center w-full'>
                <div className='flex flex-col justify-center items-start gap-4 border border-[#F2F2F2] rounded-2xl p-6 bg-[#F9FAFC] w-full'>
                    <h2 className='font-bold text-[24px]'>Starter</h2>
                    <p className='text-[16px] text-[#627382]'>Perfect for getting started</p>
                    <p className='text-[16px] text-[#627382]'> <span className='font-bold text-[40px] text-black'>$0</span>/Month</p>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#627382]'>Access to 10 free tools</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#627382]'>Basic templates</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#627382]'>Community support</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#627382]'>1 project per month</p>
                    </div>
                    <button className='btn btn-primary text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none w-full rounded-4xl'>Get Started Free</button>
                </div>
                <div className='relative flex flex-col justify-center items-start gap-4 border border-[#F2F2F2] rounded-2xl p-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full text-white'>
                    <div className={`rounded-[1000px] px-3 py-1 bg-[#fef3c6] text-[#cc7732] absolute -top-3.75 right-1/3`}>
                        Most Popular
                    </div>
                    <h2 className='font-bold text-[24px]'>Pro</h2>
                    <p className='text-[16px] text-[#FFFFFF]/80'>Best for professionals</p>
                    <p className='text-[16px] text-[#FFFFFF]'> <span className='font-bold text-[40px] text-white'>$29</span>/Month</p>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#FFFFFF]'>Access to 10 free tools</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#FFFFFF]'>Basic templates</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#FFFFFF]'>Community support</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#FFFFFF]'>1 project per month</p>
                    </div>
                    <button className='btn bg-white border-none w-full rounded-4xl text-[16px]'>
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start pro trial</span>
                    </button>
                </div>
                <div className='flex flex-col justify-center items-start gap-4 border border-[#F2F2F2] rounded-2xl p-6 bg-[#F9FAFC] w-full'>
                    <h2 className='font-bold text-[24px]'>Starter</h2>
                    <p className='text-[16px] text-[#627382]'>Perfect for getting started</p>
                    <p className='text-[16px] text-[#627382]'> <span className='font-bold text-[40px] text-black'>$0</span>/Month</p>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#627382]'>Access to 10 free tools</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#627382]'>Basic templates</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#627382]'>Community support</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Check} alt="" />
                        <p className='font-medium text[16px] text-[#627382]'>1 project per month</p>
                    </div>
                    
                    <button className='btn btn-primary text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none w-full rounded-4xl'>Get Started Free</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;