import React, { useState } from 'react'
import SocialMedia1 from '../../../assets/SocialMedia1.svg'
import SocialMedia2 from '../../../assets/SocialMedia2.svg'
import SocialMedia3 from '../../../assets/SocialMedia3.svg'
import SocialMedia4 from '../../../assets/SocialMedia4.svg'
import UButton from '../../../component/uButton/UButton'
import Download from '../../../assets/Download.svg'
import Photo1 from '../../../assets/photo.png'
import Photo2 from '../../../assets/Photo2.jpg'
import Photo3 from '../../../assets/Photo3.jpg'
import Photo4 from '../../../assets/Photo4.jpg'
import Photo5 from '../../../assets/Photo5.jpg'
import Photo6 from '../../../assets/Photo6.jpg'

function Section1() {

    const slides = [
        {
            url: Photo2,
        },
        {
            url: Photo1,
        },
        {
            url: Photo3,
        },
        {
            url: Photo4,
        },
        {
            url: Photo5,
        },
        {
            url: Photo6,
        },
    ]

    const [currentIndex, SetCurrentIndex] = useState(1);
     
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      SetCurrentIndex(newIndex);
    };

    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      SetCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        SetCurrentIndex(slideIndex);
    };
  return (
    <>
    <div className="px-[180px] pt-[30px] pb-[60px] flex flex-col items-center gap-[60px] max-[450px]:flex-col max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px]">
        <div className="w-[100%] flex items-start justify-between max-[450px]:flex-col max-[450px]:gap-[40px] max-[640px]:flex-col max-[640px]:gap-[50px]">
            <div className="flex flex-col gap-[32px]">
                <h4 className='text-[24px] font-semibold  max-[450px]:text-[19px] max-[640px]:tetx-[21px]'>Passionate Visual Designer, Webflow <br /> Developer and part time freelancer <br /> with a keen eye for details.</h4>
                <div className="flex items-center gap-[16px]">
                    <p className='text-[18px] font-semibold'>Follow me </p>
                    <div className="flex items-center gap-[8px]">
                        <a href="https://dribbble.com/" target='_blank'><img src={SocialMedia1} alt="" /></a>
                        <a href="https://wordpress.com/" target='_blank'><img src={SocialMedia2} alt="" /></a>
                        <a href="https://instagram.com/" target='_blank'><img src={SocialMedia3} alt="" /></a>
                        <a href="https://twitter.com/" target='_blank'><img src={SocialMedia4} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[32px] max-[450px]:w-[100%]">
                <p className="text-[16px] font-medium text-[#7B848B] max-[375px]:text-[11px] max-[450px]:text-[14px] ">I specialize in UI/UX & Graphic Design and my passion is all about <br /> building elegant and professional user interfaces and websites. I <br /> also do branding and identity design such as logo design, and <br /> business cards, along with photo editing.</p>
                <div className="flex items-center gap-[16px] max-[450px]:gap-[15px] max-[350px]:justify-between">
                    <UButton value='Request Quotation' primary={true} className='text-[#fff] leading-6 max-[450px]:text-[12px] max-[450px]:gap-[5px] max-[450px]:px-[24px] max-[450px]:py-[10px]' iconEnd={<i className='ri-arrow-right-line text-[22px] max-[450px]:text-[18px]'></i>}/>
                    <UButton value='Download Resume' className=' text-[#fff] max-[450px]:text-[11px] max-[450px]:gap-[15px] max-[450px]:p-[10px] px' icon={<img src={Download}></img>}/>
                </div>
            </div>
        </div>
        <div className="relative w-full h-[550px] rounded-[16px] bg-cover" style={{ backgroundImage: `url(${slides[currentIndex].url})`}}>
            <div onClick={prevSlide} className="w-[50px] h-[50px] cursor-pointer pr-[1px] pb-[1px] flex items-center justify-center bg-[#fff] rounded-[50px] absolute top-[50%] left-[-25px] bg4 max-[450px]:left-[-20px] max-[450px]:top-[43%] max-[640px]:top-[42%]"><i className="ri-arrow-left-line text-[22px] text-[#1777E5]"></i></div>

            <div onClick={nextSlide} className="w-[50px] h-[50px] cursor-pointer pl-[1px] pt-[1px] flex items-center justify-center bg-[#fff] rounded-[50px] absolute top-[50%] right-[-25px] bg4 max-[450px]:top-[43%] max-[640px]:top-[42%]"><i className="ri-arrow-right-line text-[23px] text-[#1777E5]"></i></div>
        </div>
        <div className="flex items-center gap-[12px]">
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)}  className={`cursor-pointer rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white w-[32px] h-[12px]' : 'bg-[#222628] w-[12px] h-[12px]'}`}></div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Section1