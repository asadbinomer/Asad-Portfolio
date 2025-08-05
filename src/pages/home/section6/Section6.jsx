import React from "react";
import icon1 from "../../../assets/icon3.svg";
import icon2 from "../../../assets/icon4.png";

function Section6() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-[1200px] py-[100px] flex items-center max-[450px]:items-start justify-between gap-[70px]  max-[450px]:flex-col max-[450px]:item-center max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:items-center max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px]">
          <div className="flex flex-col gap-[32px] max-[450px]:w-[100%]">
            <div className="w-[487px] p-[32px] flex items-center gap-[24px] bg-[#121314] rounded-[10px] border-2 border-[#222628] max-[450px]:w-[100%] max-[450px]:flex-col ">
              <img src={icon1} alt="" />
              <div className="flex flex-col gap-[8px]">
                <h4 className="text-[20px] font-semibold">
                  Awwwards Judge ‘19-20
                </h4>
                <p className="text-[16px] font-medium text-[#5E6971]">
                  Awwwards is a professional web design and development
                  competition body. It aims to recognize and promote.
                </p>
              </div>
            </div>
            <div className="w-[487px] p-[32px] flex items-center gap-[24px] bg-[#121314] rounded-[10px] border-2 border-[#222628] max-[450px]:w-[100%] max-[450px]:flex-col ">
              <img src={icon2} alt="" />
              <div className="flex flex-col gap-[8px]">
                <h4 className="text-[20px] font-semibold">
                  Site of the Years for Lewis
                </h4>
                <p className="text-[16px] font-medium text-[#5E6971]">
                  Lewis University offers practical, goal-oriented education for
                  undergraduate student, graduate.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[24px]">
              <h1 className="text-[48px] font-semibold max-[450px]:text-[40px]">
                My achievments
              </h1>
              <p className="text-[16px] font-medium text-[#5E6971] max-[450px]:text-[14px]">
                Sed semper, felis at facilisis auctor, justo eros vulputate
                nulla, dapibus suscipit augue ex id dui. Integer a elit id enim
                eleifend tristique sed vel sem. Donec sodales urna sit amet
                mauris volutpat pellentesque. Suspendisse potenti. In ornare
                convallis nisi ut viverra.
              </p>
            </div>
            <div className="w-auto p-[32px] bg-[#222628] rounded-[5px] flex flex-col gap-[10px] max-[450px]:w-[100%]">
              <h5 className="text-[16px] font-semibold">
                Language i can speak
              </h5>
              <div className="w-[100%] flex items-center justify-between gap-[15px] max-[450px]:flex-wrap">
                <li className="text-[20px] font-semibold text-[#1777E5]">
                  English
                </li>
                <li className="text-[20px] font-semibold text-[#9249F2]">
                  Mandarin
                </li>
                <li className="text-[20px] font-semibold text-[#2DB24A]">
                  Spanish
                </li>
                <li className="text-[20px] font-semibold text-[#FF5F49]">
                  Hindi
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
