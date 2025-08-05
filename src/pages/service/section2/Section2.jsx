import React from 'react'
import Tool1 from '../../../assets/Tool1.svg'
import Tool2 from '../../../assets/Tool2.svg'
import Tool3 from '../../../assets/Tool3.svg'
import Tool4 from '../../../assets/Tool4.svg'
import Tool5 from '../../../assets/Tool5.svg'
import Tool6 from '../../../assets/Tool6.svg'
import Tool7 from '../../../assets/Tool7.svg'
import Tool8 from '../../../assets/Tool8.svg'

function Section2() {
  // Original tools data array
  const tools = [
    { id: 1, icon: Tool1, name: 'Slack' },
    { id: 2, icon: Tool2, name: 'Figma' },
    { id: 3, icon: Tool3, name: 'Sketch' },
    { id: 4, icon: Tool4, name: 'Photoshop' },
    { id: 5, icon: Tool5, name: 'Illustrator' },
    { id: 6, icon: Tool6, name: 'Adobe XD' },
    { id: 7, icon: Tool7, name: 'Notion' },
    { id: 8, icon: Tool8, name: 'Webflow' }
  ];

  const duplicateToolsArray = tools.map((tool) => ({
    ...tool,
    id: tool.id + 16
  }));

  const allTools = [...tools, ...duplicateToolsArray];

    const workingSteps = [
    { id: 1, emoji: '🤝', title: '1. Project Introduction' },
    { id: 2, emoji: '🖌️', title: '2. Visual Design' },
    { id: 3, emoji: '💻️', title: '3. Webflow Development' },
    { id: 4, emoji: '👍', title: '4. Revision & Delivery' }
  ];

  return (
    <>
      <div className="mx-[180px] overflow-hidden py-[60px] flex flex-col text-center items-center gap-[32px] justify-between max-[450px]:flex-col max-[450px]:px-[15px] max-[450px]:py-[50px] max-[450px]:gap-[50px] max-[640px]:px-[50px] max-[640px]:py-[80px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[80px]">
        <div className="flex flex-col gap-[36px]">
          <div className="flex items-center gap-[24px] text-center mx-auto">
            <p className='text-[18px] font-semibold text-center'>Tools i USE</p>
          </div>
          <div className="flex flex-wrap gap-[10px] max-[450px]::w-[100%] max-[375px]:w-[100%] animate1 justify-center">
            {allTools.map((tool) => (
              <div 
                key={tool.id}
                className="w-[120px] h-[120px] flex flex-col items-center justify-center text-center gap-[14px] bg-[#121314] rounded-[6px] border-[2px] border-[#222628]"
              >
                <img src={tool.icon} alt={tool.name} className='w-[40px] h-[40px]'/>
                <p className='text-[18px] font-semibold'>{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex text-left py-[100px] items-center gap-[80px] justify-between max-[450px]:text-center  max-[450px]:flex-col max-[450px]:item-center max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:items-center max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:py-[20px]">
          <div className="flex flex-col gap-[20px]">
            <h1 className='text-[40px] font-semibold'>Working process</h1>
            <p className='text-[17px] font-medium text-[#5E6971]'>I specialize in UI/UX & Graphic Design and my passion is all about building elegant and professional user interfaces.</p>
          </div>
          <div className="w-fit flex flex-wrap justify-end gap-[20px]">
            {workingSteps.map((step) => (
              <div 
                key={step.id}
                className="w-[200px] p-[15px] flex items-center gap-[5px] bg-[#222628] rounded-[6px] text-[13px] font-medium"
              >
                {step.emoji} <p>{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2