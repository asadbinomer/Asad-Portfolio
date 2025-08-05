import React from "react";

function Section4() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-[1200px] py-[80px] flex items-center gap-[80px] justify-between max-[450px]:flex-col max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:items-start max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px]">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <h4 className="text-[20px] font-semibold">
                  💼 Let’s work together!
                </h4>
                <p className="text-[16px] font-medium text-[#5E6971] max-[700px]:text-[14px]">
                  I am taking on new projects. Waiting to hear about new <br />{" "}
                  projects, so if you'd like to chat please get in touch.
                </p>
              </div>
              <h1 className="text-[40px] font-semibold text-[#1777E5] max-[700px]:text-[30px]">
                howardstark@info.com
              </h1>
            </div>
            <hr className="border-[#222628] w-[100%]" />
            <div className="flex items-center gap-[24px] w-[100%]">
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[40px] font-semibold">17+</h2>
                <p className="text-[16px] font-medium text-[#5E6971]">
                  Years of Experience
                </p>
              </div>
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[40px] font-semibold">390+</h2>
                <p className="text-[16px] font-medium text-[#5E6971]">
                  Completed Projects
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[36px]">
            <div className="flex flex-col gap-[24px]">
              <h1 className="text-[40px] font-semibold">Working process</h1>
              <p className="text-[20px] font-medium text-[#5E6971]">
                I specialize in UI/UX & Graphic Design and my passion is all
                about building elegant and professional user interfaces.
              </p>
            </div>
            <div className="w-[100%] flex flex-wrap gap-[20px]">
              <div className="w-[210px] p-[15px] flex items-center gap-[5px] bg-[#222628] rounded-[6px] text-[14px] font-medium">
                🤝 <p className="">1. Project Introduction</p>
              </div>
              <div className="w-[210px] p-[15px] flex items-center gap-[5px] bg-[#222628] rounded-[6px] text-[14px] font-medium">
                🖌️ <p className="">2. Visual Design</p>
              </div>
              <div className="w-[210px] p-[15px] flex items-center gap-[5px] bg-[#222628] rounded-[6px] text-[14px] font-medium">
                💻️ <p className="">3. Webflow Development</p>
              </div>
              <div className="w-[210px] p-[15px] flex items-center gap-[5px] bg-[#222628] rounded-[6px] text-[14px] font-medium">
                👍 <p className="">4. Revision & Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
