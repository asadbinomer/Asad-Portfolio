import React from 'react'
import UButton from '../../../component/uButton/UButton'
import Image10 from '../../../assets/Image10.png'
import icon10 from '../../../assets/icon10.png'

function UserService() {
  return (
    <>
        <div className="px-[180px] pb-[70px] pt-[45px] flex items-center gap-[80px] justify-between max-[450px]:flex-col max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px]">
      <img src={Image10} alt="" className='w-[550px] h-[550px] max-[450px]:w-full max-[450px]:h-full max-[640px]:w-full max-[640px]:h-full'/>
      <div className="flex flex-col items-start gap-[35px] max-[450px]:gap-[20px] mt-[-60px]">
        <img src={icon10} className='w-[120px] mb-[-70px] ml-[-20px]'/>
        <div className='flex flex-col gap-[20px]'>
            <h1 className='text-[48px] font-semibold max-[450px]:text-[35px]'>User Interface Design</h1>
            <p className='text-[18.5px] font-medium text-[#7B848B] max-[450px]:text-[15px]'>Nam eget quam maximus, maximus neque a, euismod aue. Donec interdum fringilla blandit. Donec et ligula laoreet, sodales risus sodales, laoreet nisi. Vestibulum masa odio, laoreet eget turpis vel, ornare viverra lectus. Donec a diam suscipit hendrerit.</p>
        </div>
        <UButton value='Let’s Work Together' primary={true} iconEnd={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 12H20.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>}/>
      </div>
    </div>
    </>
  )
}

export default UserService