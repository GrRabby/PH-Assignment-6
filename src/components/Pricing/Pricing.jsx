import React, { use } from 'react';
import Check from "../../assets/Check.png"
const Pricing = ({ProceDataPromise}) => {
    const PriceData = use(ProceDataPromise)
    return (
        <div className='max-w-300 mx-auto flex flex-col gap-10 justify-between items-center py-30'>
            <div className='flex flex-col justify-between items-center gap-4'>
                <h2 className='font-extrabold text-[48px]'>Simple, Transparent Pricing</h2>
                <p className='text-[16px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='flex justify-center items-stretch gap-7 w-full'>
                {
                    PriceData.map((prices,index) => {
                        return(
                            <div key={index} className={`relative shadow-md flex flex-col justify-between  items-start gap-4 border border-[#F2F2F2] rounded-2xl p-6 ${prices.tag === 'Popular' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-[#F9FAFC]"} w-full`}>
                                {prices.tag === 'Popular' && <div className={"rounded-[1000px] px-3 py-1 bg-[#fef3c6] text-[#cc7732] absolute -top-3.75 right-1/3"}> Most Popular </div>}
                                <div className='flex flex-col justify-center items-start gap-6'>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-col justify-center items-start'>
                                            <h2 className={`font-bold text-[24px] ${prices.tag === 'Popular' ? "text-white" : "text-black"}`}>{prices.name}</h2>
                                            <p className={`text-[16px] ${prices.tag === 'Popular' ? "text-white" : "text-[#627382]"}`}>{prices.description}</p>
                                        </div>
                                        <p className={`text-[16px] ${prices.tag === 'Popular' ? "text-white" : "text-[#627382]"}`}> <span className={`font-bold text-[40px] ${prices.tag === 'Popular' ? "text-white" : "text-black"}`}>${prices.price}</span>/Month</p>
                                    </div>
                                    <div className='flex flex-col justify-start items-start'>
                                        {
                                            prices.features.map((features,ind)  => {
                                                return(
                                                    <div key={ind} className='flex justify-between items-center gap-2'>
                                                        <img src={Check} alt="" />
                                                        <p className={`font-medium text-[16px] ${prices.tag === 'Popular' ? "text-white" : "text-[#627382]"}`}>{features}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {
                                    prices.tag === 'Popular' ? <button className='btn bg-white border-none w-full rounded-4xl text-[16px]'> <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start pro trial</span> </button>
                                    : <button className='btn btn-primary text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none w-full rounded-4xl'>Get Started Free</button>
                                }
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Pricing;