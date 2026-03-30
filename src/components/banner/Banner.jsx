import React from 'react';
import circle from "../../assets/circle.png"
import play from "../../assets/play.png"
import bannerImg from "../../assets/banner.png"
const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-15 max-w-300 mx-auto py-21.25 px-5'>
            <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-4 max-w-180'>
                <div className="px-4 py-2 bg-[#E1E7FF] rounded-[1000px] text-[16px] font-medium">
                    <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent flex gap-2 justify-center items-center">
                        <img src={circle} alt="" /> New: AI-Powered Tools Available
                    </span>
                </div>
                <h2 className='font-extrabold text-[52px] md:text-[72px] text-[#101727] text-center md:text-left'>Supercharge Your Digital Workflow</h2>
                <p className='text-[18px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity<br></br>
                software—all in one place. Start creating faster today.<br></br>
                Explore Products</p>
                <div className='flex justify-center items-center gap-4 mt-4'>
                    <button className='btn btn-primary py-3 px-4 font-semibold rounded-[10000px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none'>Explore Products</button>
                    <button className='btn btn-primary shadow-none not-first-of-type:py-3 px-4 font-semibold rounded-[10000px] bg-white'>
                        <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent flex justify-center items-center gap-2">
                           <img src={play} alt="" />Watch Demo
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;