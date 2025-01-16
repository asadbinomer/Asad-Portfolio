import React from 'react'
import { useNavigate } from 'react-router-dom';
import project1 from '../../../assets/project1.png'
import project2 from '../../../assets/project2.png'
import project3 from '../../../assets/project3.png'
import UButton from '../../../component/uButton/UButton'

function Section7() {
  const navigate = useNavigate();

  const handleCaseStudyClick = () => {
    navigate('/work-case-studies');
  };

  const handleAllProjetcs = () => {
    navigate('/work');
  };
  return (
    <>
    <div className="px-[180px] py-[100px] flex flex-col items-center overflow-hidden text-center gap-[60px] max-[450px]:flex-col max-[450px]:item-center max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:items-center max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px]">
      <h1 className='text-[48px] font-semibold max-[640px]:text-[40px] max-[450px]:text-[30px]'>Latest case studies</h1>
      <div className="flex items-center gap-[24px] justify-center w-[180%] max-[640px]:w-[300%] z-1 max-[375px]:w-[300%] max-[375px]:h-[250px]">
        <div className="relative w-[100%]">
          <img src={project1} alt="" className='w-[800px] h-[400px]'/>
        </div>
        <div className="relative w-[100%] h-[100%] overflow-hidden project-cover">
          <img src={project2} alt="" className='w-[800px] h-[400px]'/>
          <div className="project w-[100%] h-[100%] py-[130px] px-[80px] flex flex-col items-center gap-[32px] max-[640px]:gap-[15px] justify-center z-1 bg-opacity-[.7] transition-[1s] bg-[#121314] absolute top-[100%] max-[640px]:top-[140%] left-[0px] max-[640px]:py-[20px] max-[640px]:px-[20px]">
            <div className="flex flex-col gap-[24px] items-center max-[640px]:gap-[10px]">
            <div className="flex flex-col items-center gap-[16px] max-[640px]:gap-[5px]">
              <UButton value='WEBSITE' className='w-[120px] px-[16px] py-[10px]'/>
              <h5 className='text-[32px] font-semibold max-[640px]:text-[20px]'>Relik - Admin Dashboard</h5>
            </div>
            <p className='text-[18px] font-medium text-[#C1C1C1] max-[640px]:text-[12px]'>👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.</p>
            </div>
            <UButton value="Case Study" onClick={handleCaseStudyClick} className='bg-transparent border-2 border-[#fff] text-[#ffff] font-semibold rounded-[4px] max-[640px]:w-[128px] max-[640px]:text-[15px]' primary={true} />
          </div>
        </div>
        <div className="relative w-[100%]">
          <img src={project3} alt="" className='w-[800px] h-[400px]'/>
        </div>
      </div>
      <UButton value="View all projects" onClick={handleAllProjetcs} className='bg-transparent border-2 border-[#1777E5] text-[#1777E5] font-semibold rounded-[4px] hover:bg-[#1777e5] hover:text-[#fff] transition-all' primary={true} />
    </div>
    </>
  )
}

export default Section7