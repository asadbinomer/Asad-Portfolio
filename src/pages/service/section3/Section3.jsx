import React from 'react'
import SocialMedia from '../../../assets/SocialMedia.png'
import Dribble from '../../../assets/Dribble.svg'
import Twiter from '../../../assets/TwiterIcon.svg'
import instagram from '../../../assets/instagram.svg'

function Section3() {
  return (
    <>
    <div className="px-[180px] py-[100px] flex items-center justify-between gap-[90px] bg5 max-[450px]:flex-col max-[450px]:item-center max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:items-center max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px">
      <div className="flex flex-col gap-[40px] max-[450px]:w-[100%]">
        <div className="flex flex-col gap-[24px] text-start">
          <h1 className='text-[40px] font-semibold'>My Skills & Expertise</h1>
          <p className="text-[16px] font-medium text-[#5E6971]">Pellentesque luctus tristique velit, ut condimentum tortor egestas suscipit. Fusce sem leo, eleifend eu quam non, vestibulum consequat lorem.</p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <p className='text-[18px] font-medium'>Webflow CMS</p>
          <div className="relative flex items-center justify-center">
            <div className="w-[500px] h-[6px] bg-[#09305C] rounded-[30px] mt-[5px] max-[450px]:w-[100%]"></div>
            <div className="w-[440px] h-[17px] bg-[#1777E5] rounded-[30px] absolute left-0 top-0  max-[450px]:max-w-[350px]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <p className='text-[18px] font-medium'>Animation</p>
          <div className="relative flex items-center justify-center">
            <div className="w-[500px] h-[6px] bg-[#66261D] rounded-[30px] mt-[5px] max-[450px]:w-[100%]"></div>
            <div className="w-[380px] h-[17px] bg-[#FF5F49] rounded-[30px] absolute left-0 top-0 max-[450px]:w-[300px]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <p className='text-[18px] font-medium'>Design Sense</p>
          <div className="relative flex items-center justify-center">
            <div className="w-[500px] h-[6px] bg-[#12471E] rounded-[30px] mt-[5px] max-[450px]:w-[100%]"></div>
            <div className="w-[440px] h-[17px] bg-[#2DB24A] rounded-[30px] absolute left-0 top-0 max-[450px]:w-[390px]"></div>
          </div>
        </div>
      </div>
      <div className="relative mt-[80px]">
        <div className="w-[350px] h-[350px] p-[50px] flex flex-col items-center justify-center text-center gap-[28px] rounded-[500px] bg-[#09305C] z-1">
          <img src={Dribble} alt="" className='w-[70px]'/>
          <div className="flex flex-col gap-[5px]">
            <h5 className='text-[18px] font-medium text-[#93A4B7]'>Dribbble</h5>
            <h1 className='text-[30px]'>379k Followers</h1>
          </div>
        </div>
        <div className="absolute top-[60px] left-[-80px] w-[180px] h-[180px] p-[10px] flex flex-col items-center justify-center text-center gap-[12px] rounded-[500px] bg-[#222628] z-1">
          <img src={Twiter} alt="" className='w-[40px]'/>
          <div className="flex flex-col gap-[2px]">
            <h5 className='text-[14px] font-medium text-[#93A4B7]'>Twitter</h5>
            <h1 className='text-[18px]'>97k Followers</h1>
          </div>
        </div>
        <div className="border2 absolute top-[-70px] right-[-90px] w-[230px] z-10 h-[230px] p-[10px] flex flex-col items-center justify-center text-center gap-[15px] rounded-[50%] bg-[#171819] z-1">
          <img src={instagram} alt="" className='w-[60px] cursor-pointer z-10'/>
          <div className="flex flex-col gap-[3px]">
            <h5 className='text-[14px] font-medium text-[#93A4B7]'>Instagram</h5>
            <h1 className='text-[20px]'>127k Followers</h1>
          </div>
        </div>
      </div>
      {/* <img src={SocialMedia} alt="" className='max-w-[550px] max-[450px]:max-w-[100%]'/> */}
    </div>
    </>
  )
}

export default Section3