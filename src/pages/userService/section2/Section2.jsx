import React from 'react'
import UButton from '../../../component/uButton/UButton'
import image11 from '../../../assets/image11.png'

function Section2() {
  return (
    <>
    <div className='px-[180px] py-[100px] bg2 flex items-center gap-[80px] justify-between max-[450px]:flex-col max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px]'>
      <div className="flex flex-col items-start gap-[35px] max-[450px]:gap-[20px] max-w-[490px]">
        <div className='flex flex-col gap-[20px]'>
            <h1 className='text-[40px] font-semibold max-[450px]:text-[35px]'>UI Strategy, Problem, and Solution</h1>
            <p className='text-[18.5px] font-medium text-[#7B848B] max-[450px]:text-[15px]'>Suppose you are the designer of a software company that builds a video interviewing software application. Hiring teams of small to large companies use it to save time in interviewing candidates. Their process has greatly improved but new problems arise when using your app.</p>
        </div>
        <UButton value='Let’s Work Together' primary={true} iconEnd={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 12H20.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>}/>
      </div>
      <div className="relative w-[1000px] pr-[80px]">
        <div className="z-[20] relative p-[40px] flex flex-col gap-[24px] rounded-[8px] bg-[#121314]">
          <p className='text-[24px] font-semibold'>🚀 UI Skills</p>
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[8px]">
              <p className='text-[16px] font-medium'>Style Guide</p>
              <div className="relative flex items-center justify-center">
                <div className="w-[344px] h-[6px] bg-[#09305C] rounded-[30px] mt-[3px] max-[450px]:w-[100%]"></div>
                <div className="w-[300px] h-[12px] bg-[#1777E5] rounded-[30px] absolute left-0 top-0  max-[450px]:max-w-[350px]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className='text-[16px] font-medium'>Design Concept</p>
              <div className="relative flex items-center justify-center">
                <div className="w-[344px] h-[6px] bg-[#66261D] rounded-[30px] mt-[3px] max-[450px]:w-[100%]"></div>
                <div className="w-[255px] h-[12px] bg-[#FF5F49] rounded-[30px] absolute left-0 top-0  max-[450px]:max-w-[350px]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className='text-[16px] font-medium'>UI Design Testing</p>
              <div className="relative flex items-center justify-center">
                <div className="w-[344px] h-[6px] bg-[#12471E] rounded-[30px] mt-[3px] max-[450px]:w-[100%]"></div>
                <div className="w-[318px] h-[12px] bg-[#2DB24A] rounded-[30px] absolute left-0 top-0  max-[450px]:max-w-[350px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[-50px] z-[1] top-[50px] p-[40px] flex flex-col gap-[24px] rounded-[8px] bg-[#121314] border-[#DFE3E5] border-[1px] z-2">
          <p className='text-[24px] font-semibold'>🔥 User Interface Strategy</p>
          <div className="flex flex-col gap-[8px]">
            <li className='text-[16px] font-medium text-[#7B848B]'>Know your users.</li>
            <li className='text-[16px] font-medium text-[#7B848B]'>Define how people use your interface.</li>
            <li className='text-[16px] font-medium text-[#7B848B]'>Set expectations & Anticipate mistakes.</li>
            <li className='text-[16px] font-medium text-[#7B848B]'>Give feedback—fast.</li>
            <li className='text-[16px] font-medium text-[#7B848B]'>Think carefully about element placement.</li>
            <li className='text-[16px] font-medium text-[#7B848B]'>Make your interfaces easy to learn.</li>
          </div>
        </div>
        <div className="absolute left-[100px] z-[0] top-[-100px] p-[40px] flex flex-col gap-[24px] rounded-[8px] bg-[#121314] z-2">
          <p className='text-[24px] font-semibold'><span className='text-[#464646]'>✔</span> Solution</p>
          <div className="flex flex-col gap-[8px]">
            <p className='text-[16px] font-medium text-[#236C44] flex items-center gap-[8px]'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.875 7.875L5.625 16.125L1.5 12" stroke="#236C44" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.4999 7.875L14.2499 16.125L12.0562 13.9313" stroke="#236C44" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Tell a story to fill the gaps</p>
            <p className='text-[16px] font-medium text-[#236C44] flex items-center gap-[8px]'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.875 7.875L5.625 16.125L1.5 12" stroke="#236C44" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.4999 7.875L14.2499 16.125L12.0562 13.9313" stroke="#236C44" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Tackle the challenging parts of <br /> the ui first.</p>
            <p className='text-[16px] font-medium text-[#236C44] flex items-center gap-[8px]'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.875 7.875L5.625 16.125L1.5 12" stroke="#236C44" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.4999 7.875L14.2499 16.125L12.0562 13.9313" stroke="#236C44" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Higher-fidelity wireframes</p>
          </div>
        </div>
      </div>
      {/* <img src={image11} className='w-[600px] mr-[-80px] max-[450px]:mr-[0px]'/> */}
    </div>    
    </>
  )
}

export default Section2