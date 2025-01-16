import React, { useState } from 'react'
import UButton from '../../../component/uButton/UButton'
import icon1 from '../../../assets/ArrowSquareOut.svg'
import icon2 from '../../../assets/CheckCircle.svg'
import image1 from '../../../assets/Image4.png'
import image2 from '../../../assets/Image5.png'
import image3 from '../../../assets/Image6.png'
import Photo1 from '../../../assets/photo.png'
import Photo2 from '../../../assets/Photo2.jpg'
import Photo3 from '../../../assets/Photo3.jpg'
import Photo4 from '../../../assets/Photo4.jpg'
import Photo5 from '../../../assets/Photo5.jpg'
import Photo6 from '../../../assets/Photo6.jpg'

function Section1() {
  const slides = [
    {
        url: Photo1,
    },
    {
        url: image3,
    },
    {
        url: Photo2,
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
  return (
    <>
      <div className="px-[180px] pt-[64px] pb-[160px] flex flex-col gap-[64px] max-[450px]:px-[15px] max-[450px]:gap-[32px] max-[450px]:pt-[32px] max-[450px]:pb-[64px]">
        <div className="flex gap-[130px] justify-between max-[450px]:flex-col max-[450px]:gap-[32px]">
          <div className="flex flex-col gap-[32px] max-w-[350px]">
            <div className="flex flex-col gap-[8px]">
              <p className='text-[14px] font-normal text-[#485057]'>MY ROLE</p>    
              <div className="flex flex-col gap-[2px]">
                <li className='text-[18px] font-medium'>Product Designer</li>
                <li className='text-[18px] font-medium'>Webflow Developer</li>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className='text-[14px] font-normal text-[#485057]'>SERVICE I PROVIDE</p>
              <div className="flex flex-col gap-[2px]">
                <li className='text-[18px] font-medium'>UI/UX Designer</li>
                <li className='text-[18px] font-medium'>Webflow Development</li>
                <li className='text-[18px] font-medium'>Product Marketing</li>
                <li className='text-[18px] font-medium'>Website Content Writing</li>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className='text-[14px] font-normal text-[#485057]'>PROJECT DURATION</p>
              <div className="flex flex-col gap-[2px]">
                <p className='text-[18px] font-medium'>Jul 2015 - Jan 2016</p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className='text-[14px] font-normal text-[#485057]'>Client</p>
              <div className="flex flex-col gap-[2px]">
                <p className='text-[18px] font-medium'>Clicon - Ralph Edwards</p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className='text-[14px] font-normal text-[#485057]'>CLIENT DESIGNATION</p>
              <div className="flex flex-col gap-[2px]">
                <p className='text-[18px] font-medium'>This slide is 100% editable. Adapt it to your needs and capture your audience’s attention.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] max-w-[650px]">
            <div className="flex flex-col gap-[8px]">
              <p className='text-[16px] font-medium text-[#1777E5]'>CLICON - RALPH EDWARDS</p>
              <h1 className='text-[32px] font-medium text-[#fff]'>Client/Project Brief Description</h1>
            </div>
            <p className='text-[17px] font-normal text-[#5E6971]'>Aliquam lacinia nisi ut massa rutrum, ut rutrum augue accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet lacus nisi. Ut ut felis eu orci elementum hendrerit id ut est. Curabitur erat risus, porttitor vel nisi vitae, consequat dignissim dolor. Phasellus pulvinar erat magna, vitae laoreet metus sollicitudin non. Aliquam placerat commodo facilisis. Donec libero urna, rutrum quis finibus sit amet, venenatis eget odio.</p>
            <div className="flex items-center gap-[24px] max-[450px]:flex-col">
              <UButton value={<><span>Launch Project</span> <span className='text-[14px] text-[#8BBBF2]'>- Live Preview</span></>} primary={true} iconEnd={<img src={icon1}></img>} className='max-[450px]:w-full'/>
              <UButton value='View Case Study on Behance' className='text-[#1777E5] bg-transparent border-2 border-[#222628] max-[450px]:w-full'/>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[64px] max-[450px]:gap-[32px]">
          <img src={image1} alt="" />
          <div className="px-[130px] flex flex-col gap-[24px] max-[450px]:px-[15px]">
            <h4 className='text-[32px] font-semibold'>Project Goal</h4>
            <p className='text-[19.5px] font-normal text-[#9AA1A6]'>Our goal was to create an extensive library of components and assets to help designers wireframe their web projects faster. Over the course of 5 months I designed more than 400 layout components in 30 categories (each prepared for desktop, tablet & phone screens), 128 icons, 56 user journey map elements and over 100 user interface elements. You can easily customize and combine them when working on your wireframes.</p>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-[64px] max-[450px]:gap-[32px]">
          <img src={image2} alt="" />
          <div className="px-[130px] flex flex-col gap-[24px] max-[450px]:px-[15px]">
            <h4 className='text-[32px] font-semibold'>Product Branding</h4>
            <p className='text-[19.5px] font-normal text-[#9AA1A6]'>Aside from that, I was in touch with the Director of Product and the InVision tech team to report issues and bugs that I found within the software, as well as to propose improvements regarding certain functionalities. It was exciting to see how the product evolved and improved with each update during this short time.</p>
          </div>
        </div>
        <div className="flex items-start gap-[120px] justify-between max-[450px]:flex-col max-[450px]:gap-[32px]">
          <div className="flex flex-col gap-[24px] max-w-[540px]">
            <p className='text-[32px] font-semibold'>🤔 User Statement</p>
            <p className='text-[16px] font-medium text-[#9AA1A6]'>E-commerce provides an easy way to sell products to a large customer base. However, there is a lot of competition among multiple e-commerce sites. When users land on an e-commerce site, they expect to find what they are looking for quickly and easily. Also, users are not sure about the brands or the actual products they want to purchase. They have a very broad idea about what they want to buy. Many customers nowadays search for their products on Google rather than visiting specific e-commerce sites.</p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <p className='text-[32px] font-semibold'>📝 Problem List</p>
            <div className="flex flex-col gap-[12px]">
              <li className='text-[16px] font-medium text-[#9AA1A6]'>Too Many Calls to Action. This is a really common.</li>
              <li className='text-[16px] font-medium text-[#9AA1A6]'>Overly Complex Registration Process</li>
              <li className='text-[16px] font-medium text-[#9AA1A6]'>Low Findability or Discoverability</li>
              <li className='text-[16px] font-medium text-[#9AA1A6]'>Seens that are ten times better than you</li>
              <li className='text-[16px] font-medium text-[#9AA1A6]'>Overly Complex Registration Process</li>
            </div>
          </div>
        </div>
        <div className="p-[64px] flex flex-col gap-[40px] rounded-[16px] bg-[#09240F] w-[100%] max-[450px]:p-[32px] max-[450px]:gap-[32px] max-[450px]:flex-col">
          <h4 className='text-[32px] font-semibold text-[#7BA78F]'>✅ Solution</h4>
          <div className="flex items-start gap-[36px] max-[450px]:flex-col max-[450px]:gap-[32px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex items-center gap-[8px]">
              <img src={icon2} alt="" />
              <p className='text-[18px] font-medium text-[#4F8969]'>Provide a user behavior guide for new users.</p>
              </div>
              <div className="flex items-center gap-[8px]">
              <img src={icon2} alt="" />
              <p className='text-[18px] font-medium text-[#4F8969]'>Go for higher-fidelity wireframes</p>
              </div>
              <div className="flex items-center gap-[8px]">
              <img src={icon2} alt="" />
              <p className='text-[18px] font-medium text-[#4F8969]'>Just start designing and accept the consequences</p>
              </div>
              <div className="flex items-center gap-[8px]">
              <img src={icon2} alt="" />
              <p className='text-[18px] font-medium text-[#4F8969]'>Document typical behavioral patterns and feedback loops to achieve consistency when working on a large team.</p>
              </div>
              <div className="flex items-center gap-[8px]">
              <img src={icon2} alt="" />
              <p className='text-[18px] font-medium text-[#4F8969]'>Animate and annotate your wireframes. Use little details to strengthen and enhance your proposed solutions.</p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="flex gap-[8px]">
              <img src={icon2} alt="" />
              <p className='text-[18px] font-medium text-[#4F8969]'>Tackle the challenging parts of the UI first.</p>
              </div>
              <div className="flex gap-[8px]">
              <img src={icon2} alt="" />
              <p className='text-[18px] font-medium text-[#4F8969]'>Create an animated prototype, Honesty & Flexibility</p>
              </div>
              <div className="flex gap-[8px]">
              <img src={icon2} alt="" />
              <p className='text-[18px] font-medium text-[#4F8969]'>Embrace (& plan) the breakage of your design processes.</p>
              </div>
              <div className="flex gap-[8px]">
              <img src={icon2} alt="" />
              <p className='text-[18px] font-medium text-[#4F8969]'>Don’t wait for perfect wireframes to create the visual style. Get on with it, and embrace the crossover of changes.</p>
              </div>
              <div className="flex gap-[8px]">
              <img src={icon2} alt="" />
              <p className='text-[18px] font-medium text-[#4F8969]'>Break your project into manageable chunks, define the user journeys, and then prototype the hard stuff first.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[580px] rounded-[16px] bg-cover" style={{ backgroundImage: `url(${slides[currentIndex].url})`}}>
            <div onClick={prevSlide} className="w-[50px] h-[50px] cursor-pointer pr-[1px] pb-[1px] flex items-center justify-center bg-[#fff] rounded-[50px] absolute top-[50%] left-[-25px] bg4 max-[450px]:left-[-20px] max-[450px]:top-[43%] max-[640px]:top-[42%]"><i className="ri-arrow-left-line text-[22px] text-[#1777E5]"></i></div>

            <div onClick={nextSlide} className="w-[50px] h-[50px] cursor-pointer pl-[1px] pt-[1px] flex items-center justify-center bg-[#fff] rounded-[50px] absolute top-[50%] right-[-25px] bg4 max-[450px]:top-[43%] max-[640px]:top-[42%]"><i className="ri-arrow-right-line text-[23px] text-[#1777E5]"></i></div>
        </div>
        <div className="flex flex-col gap-[40px] items-center text-center">
          <h1 className='text-[32px] font-semibold'>Client Feedback</h1>
          <div className="max-w-[810px] p-[40px] flex flex-col gap-[24px] rounded-[8px] bg-[#222628]">
            <p className="text-[24px] font-medium max-[450px]:text-[16.5px]">“Great Designer, does great work and is very flexible with change. if you’re a programmer and are looking for UI/UX designer is definitely well qualified for the job.”</p>
            <p className="text-[24px] font-medium max-[450px]:text-[16.5px]">James Quincey <span className="text-[18px] text-[#5E6971] max-[450px]:text-[14px]">CEO of Clicon</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1