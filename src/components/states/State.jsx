import React from 'react';

const State = () => {
    return (
        <section className='w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center'>
            <div className='max-w-300 flex flex-col lg:flex-row justify-center items-center mx-auto'>
                <div className='flex flex-col justify-center items-center gap-3 px-25 py-15'>
                    <h1 className='font-extrabold text-[60px] text-white'>50K+</h1>
                    <p className='font-medium text-[24px] text-white'>Active Users</p>
                </div>
                <div className="min-w-0.5 min-h-17.5 bg-[#FFFFFF]/40"></div>
                <div className='flex flex-col justify-center items-center gap-3 px-25 py-15'>
                    <h1 className='font-extrabold text-[60px] text-white'>200+</h1>
                    <p className='font-medium text-[24px] text-white'>Premium Tools</p>
                </div>
                <div className="min-w-0.5 min-h-17.5 bg-[#FFFFFF]/40"></div>
                <div className='flex flex-col justify-center items-center gap-3 px-25 py-15'>
                    <h1 className='font-extrabold text-[60px] text-white'>4.9</h1>
                    <p className='font-medium text-[24px] text-white'>Rating</p>
                </div>
            </div>
        </section>
    );
};

export default State;