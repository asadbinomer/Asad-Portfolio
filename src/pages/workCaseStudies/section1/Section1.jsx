import React from 'react'
import Banner from '../../../assets/Banner.png'

function Section1() {
  return (
    <>
    <div className="flex flex-col gap-[64px] pt-[64px] max-[450px]:pt-[32px]">
        <div className="flex flex-col gap-[64px] max-[450px]:gap-[32px]">
            <div className="flex flex-col gap-[16px] px-[180px] max-[450px]:px-[15px]">
                <h1 className='text-[56px] font-semibold leading-[72px] max-[450px]:text-[38px] max-[450px]:leading-[50px]'>
                    Clicon - eCommerce Marketplace Website
                </h1>
                <div className="text-[20px] font-semibold text-[#5E6971] flex items-center gap-[16px] max-[450px]:gap-[12px] max-[450px]:text-[14px] max-[350px]:flex-wrap">
                  <span className='text-[#5E6971]'>Case Study</span>
                  <span className='text-[#5E6971]'>•</span>
                  <span className='text-[#5E6971]'>eCommerce</span>
                  <span className='text-[#5E6971]'>•</span>
                  <span className='text-[#5E6971]'>Webflow CMS</span>
                  <span className='text-[#5E6971]'>•</span>
                  <span className='text-[#5E6971]'>Website</span>
                </div>
            </div>
            <img src={Banner} alt="" />
        </div>
    </div>
    </>
  )
}

export default Section1