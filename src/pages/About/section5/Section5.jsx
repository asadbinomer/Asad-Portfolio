import React from 'react'
import image1 from '../../../assets/image1.png'
import image2 from '../../../assets/image2.png'
import image3 from '../../../assets/image3.png'

function Section5() {
  return (
    <>
    <div className="px-[180px] py-[100px] flex flex-col items-center gap-[60px] max-[450px]:flex-col max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[40px] max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[40px] max-[640px]:flex-col max-[768px]:px-[40px] max-[768px]:py-[20px]">
        <h1 className='text-[48px] font-semibold max-[450px]:text-[30px]'>Personal Project</h1>
        <div className="flex items-center gap-[24px] justify-between max-[640px]:flex-wrap">
            <div className="flex flex-col gap-[32px] rounded-[10px] overflow-hidden w-[100%] max-[450px]:w-[100%] max-[640px]:w-[200px]">
                <img src={image1} alt="" className='w-[100%]'/>
                <div className="flex flex-col gap-[12px]">
                    <h4 className='text-[22px] font-semibold max-[375px]:text-[18px] max-[640px]:text-[20px]'>Drawing (2016 - 2022)</h4>
                    <p className='text-[16px] font-medium text-[#5E6971]'>Aliquam hendrerit quis nisl eget varius. Duis viverra vel quam sed posuere. Praesent tempor cursus semeu.</p>
                </div>
            </div>
            <div className="flex flex-col gap-[32px] rounded-[10px] overflow-hidden w-[100%] max-[450px]:w-[100%] max-[640px]:w-[200px]">
                <img src={image2} alt="" className='w-[100%]'/>
                <div className="flex flex-col gap-[12px]">
                    <h4 className='text-[22px] font-semibold max-[375px]:text-[18px] max-[640px]:text-[20px]'>Photography</h4>
                    <p className='text-[16px] font-medium text-[#5E6971]'>Etiam cursus dolor vel ipsum vulputate tincidunt. Nunc metus nisl, posuere nec cursus a, faucibus in elit. </p>
                </div>
            </div>
            <div className="flex flex-col gap-[32px] rounded-[10px] overflow-hidden w-[100%] max-[450px]:w-[100%] max-[640px]:w-[200px]">
                <img src={image3} alt="" className='w-[100%]'/>
                <div className="flex flex-col gap-[12px]">
                    <h4 className='text-[22px] font-semibold max-[375px]:text-[18px] max-[640px]:text-[20px]'>Pinterest SEO Marketing</h4>
                    <p className='text-[16px] font-medium text-[#5E6971]'>Pellentesque ullamcorper risus nec condimentum fermentum. Nullam vitae efficitur ex.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section5