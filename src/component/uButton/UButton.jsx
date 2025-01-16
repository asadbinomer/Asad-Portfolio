import React from 'react'

function UButton({children, icon,  onClick, iconEnd, value='Download Resume', className, primary}) {
    return (
      <>
      <div onClick={onClick} className={`w-fit flex items-center justify-center px-[25px] py-[15px] cursor-pointer  rounded-[5px] text-[18px] max-[375px]:px-[20px] max-[375px]:py-[12px] gap-[8px] ${primary ? "bg-[#1777E5]" : "bg-[#222628]"} ${className}`}>
          {icon && icon}
          {value}  
          {iconEnd && iconEnd}
      </div>
      </>
    )
  }

export default UButton