import React from 'react';

const EndSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30 px-5'>
            <div className='flex flex-col justify-center items-center gap-7 text-center'>
                <h2 className='font-extrabold text-[40px] text-white'>Ready to Transform Your Workflow?</h2>
                <p className='text-[16px] text-center text-white/80'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                <div className='flex justify-center items-center gap-4'>
                    <button className='btn btn-primary  bg-white py-3 px-6 font-semibold rounded-[10000px]'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span></button>
                    <button className='btn btn-primary py-3 px-6 font-semibold rounded-[10000px] bg-transparent text-white border border-white'>View Pricing</button>
                </div>     
                <p className='text-[16px] text-center text-white/80'>14-day free trial • No credit card required • Cancel anytime</p>           
            </div>
        </div>
    );
};

export default EndSection;