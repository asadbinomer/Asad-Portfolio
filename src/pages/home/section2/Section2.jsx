import React, { useState } from 'react';
import MyImage2 from '../../../assets/MyImage2.png';

function Section2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      text: "“Great Designer, does great work and is very flexible with change. if you’re a programmer and are looking for UI/UX designer is definitely well qualified for the job.”",
      name: "James Quincey",
      title: "CEO of Coca Cola",
    },
    {
      text: "“Excellent communication and top-notch design skills. Highly recommend for any UI/UX or branding project.”",
      name: "Sarah Johnson",
      title: "Creative Director at TechWave",
    },
    {
      text: "“Very professional and creative. Delivered the project on time with amazing design work.”",
      name: "Michael Smith",
      title: "Founder of DesignPro",
    },
    {
      text: "“Outstanding designer with attention to detail. Will definitely work together again.”",
      name: "Laura Bennett",
      title: "CEO of PixelCraft",
    },
  ];

  const prevReview = () => {
    const newIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextReview = () => {
    const newIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] py-[70px] flex items-center gap-[100px] justify-between max-[450px]:flex-col max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:items-start max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px]">
        <div className="flex flex-col items-start gap-[45px] max-[450px]:gap-[30px]">
          <h1 className="text-[48px] font-semibold leading-[60px] max-[450px]:text-[30px] max-[450px]:leading-[40px]">
            What my clients <br /> say about my work!
          </h1>

          <div className="w-[100%] p-[40px] flex flex-col gap-[15px] bg-[#222628] rounded-[10px] max-[450px]:p-[20px]">
            <p className="text-[18px] font-medium text-[#7B848B] max-[450px]:text-[15px]">
              {reviews[currentIndex].text}
            </p>
            <div className="flex items-center gap-[12px]">
              <h5 className="text-[20px] font-semibold">
                {reviews[currentIndex].name}
              </h5>
              <p className="text-[15px] font-medium text-[#5E6971]">
                {reviews[currentIndex].title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[15px]">
            <div
              onClick={prevReview}
              className="w-[50px] h-[50px] cursor-pointer pr-[1px] pb-[1px] flex items-center justify-center bg-[#222628] rounded-[50px]"
            >
              <i className="ri-arrow-left-s-line text-[22px]"></i>
            </div>

            <div className="flex items-center gap-[12px]">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-[#1777E5] w-[32px] h-[12px]"
                      : "bg-[#353A3E] w-[12px] h-[12px]"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></div>
              ))}
            </div>

            <div
              onClick={nextReview}
              className="w-[50px] h-[50px] cursor-pointer pl-[1px] pt-[1px] flex items-center justify-center bg-[#1777E5] rounded-[50px]"
            >
              <i className="ri-arrow-right-s-line text-[23px]"></i>
            </div>
          </div>
        </div>

        <img src={MyImage2} alt="" className="w-[400px] max-[640px]:w-[420px]" />
      </div>
    </div>
    </>
  );
}

export default Section2;
