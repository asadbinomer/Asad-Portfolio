import React from 'react'
import MyImage3 from '../../../assets/MyImage3.png'
import UButton from '../../../component/uButton/UButton'
import Download from '../../../assets/Download.svg'
import Tool1 from '../../../assets/Tool1.svg'
import Tool2 from '../../../assets/Tool2.svg'
import Tool3 from '../../../assets/Tool3.svg'
import Tool4 from '../../../assets/Tool4.svg'
import Tool5 from '../../../assets/Tool5.svg'
import Tool6 from '../../../assets/Tool6.svg'
import Tool7 from '../../../assets/Tool7.svg'
import Tool8 from '../../../assets/Tool8.svg'

function Section3() {
  return (
    <>
    <div className="px-[180px] pb-[80px] w-[100%] flex flex-col items-start gap-[60px] max-[450px]:flex-col max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:items-start max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px] bg-[#1F1E16]">
      <div className="w-[100%] p-[40px] flex items-center gap-[40px] justify-between bg-[#121314] border-[#222628] border-[2px] rounded-[16px] max-[450px]::flex-col max-[450px]::text-center max-[640px]:flex-col max-[640px]:text-center">
        <img src={MyImage3} alt="" />
        <div className="flex flex-col gap-[10px]">
          <h4 className='text-[25px] font-semibold'>Visual Designer & Webflow Developer.</h4>
          <p className='text-[14.3px] font-semibold text-[#7B848B]'>I specialize in UI/UX & Graphic Design and my passion is all about <br /> building elegant and professional user interfaces and websites. I also <br /> do branding nd identity design such as logo design, and business <br /> cards, along with photo editing.</p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <UButton value='Request Quotation' primary={true} className='text-[#fff] leading-6' iconEnd={<i className='ri-arrow-right-line text-[22px]'></i>}/>
          <UButton value='Download Resume' className=' text-[#fff]' icon={<img src={Download}></img>}/>
        </div>
      </div>
      <div className="flex gap-[50px] justify-between max-[450px]::flex-col max-[640px]:flex-col">
        <div className="flex flex-col gap-[36px]">
          <div className="flex items-center gap-[24px]">
            <div className="w-[30px] h-[2px] bg-[#1777E5]"></div>
            <p className='text-[18px] font-semibold text-[#1777e5]'>Educationr</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <p className='text-[14px] font-semibold text-[#1777e5]'>2021 - Present • UK</p>
              <h4 className='text-[20px] font-semibold'>Website Design Course</h4>
            </div>
            <p className='text-[14px] font-medium text-[#5E6971]'>Bachelor's Degree in Computer Science ABC <br /> Technical Institute, Jefferson, Missouri.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <p className='text-[14px] font-semibold text-[#1777e5]'>2016 - 2019 • Cambridge University</p>
              <h4 className='text-[20px] font-semibold'>Bachelor of Philosophy (B. Phil.)</h4>
            </div>
            <p className='text-[14px] font-medium text-[#5E6971]'>Coursework - Git, WordPress, Javascript, iOS, <br /> Android, appleos and macos.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <p className='text-[14px] font-semibold text-[#1777e5]'>2010 - 2014 • Oxford University</p>
              <h4 className='text-[20px] font-semibold'>Bachelor of Engineering (B. Eng.)</h4>
            </div>
            <p className='text-[14px] font-medium text-[#5E6971]'>Bachelor's Degree in Computer Science ABC <br /> Technical Institute, Jefferson, Missouri.</p>
          </div>
        </div>
        <div className="flex flex-col gap-[36px]">
          <div className="flex items-center gap-[24px">
            <div className="w-[30px] h-[2px] bg-[#33130F] "></div>
            <p className='text-[18px] font-semibold text-[#33130F]'>Work History</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <p className='text-[14px] font-semibold text-[#33130F]'>2021 - Present • UK</p>
              <h4 className='text-[20px] font-semibold'>Team Lead of UI/UX Designer</h4>
            </div>
            <p className='text-[14px] font-medium text-[#5E6971]'>Collaborate with creative and development <br /> teams on the execution of ideas.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <p className='text-[14px] font-semibold text-[#33130F]'>2016 - 2019 • Apple</p>
              <h4 className='text-[20px] font-semibold'>Senior UI/UX Designer</h4>
            </div>
            <p className='text-[14px] font-medium text-[#5E6971]'>Monitored technical aspects of the front-end <br /> delivery for projects.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <p className='text-[14px] font-semibold text-[#33130F]'>2010 - 2014 • Nasa</p>
              <h4 className='text-[20px] font-semibold'>UI/UX Designer</h4>
            </div>
            <p className='text-[14px] font-medium text-[#5E6971]'>Optimize your website and apps performance <br /> using latest technology.</p>
          </div>
        </div>
        <div className="flex flex-col gap-[36px]">
          <div className="flex items-center gap-[24px]">
            <div className="w-[30px] h-[2px] bg-[#33130F]"></div>
            <p className='text-[18px] font-semibold text-[#33130F]'>Tools i USE</p>
          </div>
          <div className="flex flex-wrap gap-[20px] w-[430px] max-[450px]::w-[100%] max-[375px]:w-[100%]">
            <div className="w-[130px] h-[130px] flex flex-col items-center justify-center text-center gap-[14px] bg-[#121314] rounded-[6px] border-[2px] border-[#222628]">
              <img src={Tool1} alt="" className='w-[40px] h-[40px]'/>
              <p className='text-[18px] font-semibold'>Slack</p>
            </div>
            <div className="w-[130px] h-[130px] flex flex-col items-center justify-center text-center gap-[14px] bg-[#121314] rounded-[6px] border-[2px] border-[#222628]">
              <img src={Tool2} alt="" className='w-[40px] h-[40px]'/>
              <p className='text-[18px] font-semibold'>Figma</p>
            </div>
            <div className="w-[130px] h-[130px] flex flex-col items-center text-center justify-center gap-[14px] bg-[#121314] rounded-[6px] border-[2px] border-[#222628]">
              <img src={Tool3} alt="" className='w-[40px] h-[40px]'/>
              <p className='text-[18px] font-semibold'>Sketch</p>
            </div>
            <div className="w-[130px] h-[130px] flex flex-col items-center text-center justify-center gap-[14px] bg-[#121314] rounded-[6px] border-[2px] border-[#222628]">
              <img src={Tool4} alt="" className='w-[40px] h-[40px]'/>
              <p className='text-[18px] font-semibold'>Photoshop</p>
            </div>
            <div className="w-[130px] h-[130px] flex flex-col items-center text-center justify-center gap-[14px] bg-[#121314] rounded-[6px] border-[2px] border-[#222628]">
              <img src={Tool5} alt="" className='w-[40px] h-[40px]'/>
              <p className='text-[18px] font-semibold'>Illustrator</p>
            </div>
            <div className="w-[130px] h-[130px] flex flex-col items-center text-center justify-center gap-[14px] bg-[#121314] rounded-[6px] border-[2px] border-[#222628]">
              <img src={Tool6} alt="" className='w-[40px] h-[40px]'/>
              <p className='text-[18px] font-semibold'>Adobe XD</p>
            </div>
            <div className="w-[130px] h-[130px] flex flex-col items-center text-center justify-center gap-[14px] bg-[#121314] rounded-[6px] border-[2px] border-[#222628]">
              <img src={Tool7} alt="" className='w-[40px] h-[40px]'/>
              <p className='text-[18px] font-semibold'>Notion</p>
            </div>
            <div className="w-[130px] h-[130px] flex flex-col items-center text-center justify-center gap-[14px] bg-[#121314] rounded-[6px] border-[2px] border-[#222628]">
              <img src={Tool8} alt="" className='w-[40px] h-[40px]'/>
              <p className='text-[18px] font-semibold'>Webflow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section3