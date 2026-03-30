import React from 'react';
import FooterLogo from "../../assets/DigiToolsFooter.png"
import InstaLogo from "../../assets/Instagram.png"
import FaceBookLogo from "../../assets/Instagram.png"
import XLogo from "../../assets/Instagram.png"
const Footer = () => {
    return (
        <div className='bg-[#101727] pt-25 pb-7'>
            <div className='max-w-300 mx-auto grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-x-20'>
                <div className='flex flex-col gap-4'>
                    <img src={FooterLogo} alt="" />
                    <p className='text-white/80 text-[16px]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-white font-medium text-[20px]'>Product</p>
                    <p className='text-white/80 text-[16px]'>Features</p>
                    <p className='text-white/80 text-[16px]'>Pricing</p>
                    <p className='text-white/80 text-[16px]'>Templates</p>
                    <p className='text-white/80 text-[16px]'>Integrations</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-white font-medium text-[20px]'>Company</p>
                    <p className='text-white/80 text-[16px]'>About</p>
                    <p className='text-white/80 text-[16px]'>Blog</p>
                    <p className='text-white/80 text-[16px]'>Careers</p>
                    <p className='text-white/80 text-[16px]'>Press</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-white font-medium text-[20px]'>Resources</p>
                    <p className='text-white/80 text-[16px]'>Documentation</p>
                    <p className='text-white/80 text-[16px]'>Help Center</p>
                    <p className='text-white/80 text-[16px]'>Community</p>
                    <p className='text-white/80 text-[16px]'>Contact</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-white font-medium text-[20px]'>Social Links</p>
                    <div className='flex justify-start items-start gap-4'>
                        <div className='flex items-center justify-center gap-3'>
                            <img src={InstaLogo} alt="" />
                        </div>
                        <div className='flex items-center justify-center gap-3'>
                                <img src={FaceBookLogo} alt="" />
                        </div>
                        <div className='flex items-center justify-center gap-3'>
                                <img src={XLogo} alt="" />
                        </div>
                    </div>
                    
                </div>
                <hr className='min-h-px border-none bg-white/40 col-span-5 mt-20 mb-7' />
                <div className='flex justify-between items-center col-span-5'>
                    <p className='text-white/50 text-[16px]'>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <p className='text-white/50 text-[16px]'>Privacy Policy</p>
                        <p className='text-white/50 text-[16px]'>Terms of Service</p>
                        <p className='text-white/50 text-[16px]'>Cookies</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;