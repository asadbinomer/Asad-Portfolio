import React from "react";
import { useNavigate } from "react-router-dom";
import icon1 from "../../../assets/🛠️.png";
import icon3 from "../../../assets/ProductMarketing.png";
import icon4 from "../../../assets/Devolpment.png";
import icon5 from "../../../assets/ContentWriting.png";
import icon2 from "../../../assets/icon2.svg";
import Ubutton from "../../../component/uButton/UButton.jsx";

function Section5() {
  const navigate = useNavigate();

  const handleCaseStudyClick = () => {
    navigate("/UserService");
  };
  return (
    <>
      <div className="w-full flex items-center justify-center bg2">
        <div className="w-full max-w-[1100px] py-[100px] flex flex-col items-center text-center gap-[60px] max-[450px]:flex-col max-[450px]:item-center max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:items-center max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px]">
          <div className="flex flex-col items-center text-center gap-[24px]">
            <h1 className="text-[48px] font-semibold max-[640px]:text-[40px]">
              Service I provide
            </h1>
            <p className="text-[20px] font-medium text-[#5E6971] max-[640px]:text-[12.5px]">
              I specialize in UI/UX & Graphic Design and my passion is all{" "}
              <br /> about building elegant and professional user interfaces.
            </p>
          </div>
          <div className="w-[100%] flex flex-wrap gap-[20px] max-[450px]:items-center">
            <div className="w-[245px] h-[280px] px-[18px] py-[32px] flex flex-col items-center justify-center gap-[32px] bg-[#121314] rounded-[8px] text-center max-[616px]:w-full">
              <div className="w-[80px] h-[80px] pt-[0px] flex items-center justify-center bg-[#141516] bg3 rounded-[50px]">
                <img
                  src={icon1}
                  alt=""
                  className="cursor-pointer"
                  onClick={handleCaseStudyClick}
                />
              </div>
              <div className="flex flex-col gap-[12px]">
                <h5 className="text-[20px] font-semibold">
                  User Interface Design
                </h5>
                <p className="text-[13.5px] font-medium text-[#485057]">
                  Proin egestas, nisi vitae hendrerit maximus, mauris nunc
                  facilisis odi.
                </p>
              </div>
            </div>
            <div className="w-[245px] h-[280px] px-[18px] py-[32px] flex flex-col items-center justify-center gap-[32px] bg-[#121314] rounded-[8px] text-center max-[616px]:w-full">
              <div className="w-[80px] h-[80px] pt-[0px] flex items-center justify-center bg-[#141516] bg3 rounded-[50px]">
                <img
                  src={icon3}
                  alt=""
                  className="mt-[15px] cursor-pointer"
                  onClick={handleCaseStudyClick}
                />
              </div>
              <div className="flex flex-col gap-[12px]">
                <h5 className="text-[20px] font-semibold">Product Marketing</h5>
                <p className="text-[13.5px] font-medium text-[#485057]">
                  Proin egestas, nisi vitae hendrerit maximus, mauris nunc
                  facilisis odi.
                </p>
              </div>
            </div>
            <div className="w-[245px] h-[280px] px-[18px] py-[32px] flex flex-col items-center justify-center gap-[32px] bg-[#121314] rounded-[8px] text-center max-[616px]:w-full">
              <div className="w-[80px] h-[80px] pt-[0px] flex items-center justify-center bg-[#141516] bg3 rounded-[50px]">
                <img
                  src={icon4}
                  alt=""
                  className="mt-[15px] cursor-pointer"
                  onClick={handleCaseStudyClick}
                />
              </div>
              <div className="flex flex-col gap-[12px]">
                <h5 className="text-[19.5px] font-semibold">
                  Webflow Development
                </h5>
                <p className="text-[13.5px] font-medium text-[#485057]">
                  Proin egestas, nisi vitae hendrerit maximus, mauris nunc
                  facilisis odi.
                </p>
              </div>
            </div>
            <div className="w-[245px] h-[280px] px-[18px] py-[32px] flex flex-col items-center justify-center gap-[32px] bg-[#121314] rounded-[8px] text-center max-[616px]:w-full">
              <div className="w-[80px] h-[80px] pt-[0px] flex items-center justify-center bg-[#141516] bg3 rounded-[50px]">
                <img
                  src={icon5}
                  alt=""
                  className="mt-[15px] cursor-pointer"
                  onClick={handleCaseStudyClick}
                />
              </div>
              <div className="flex flex-col gap-[12px]">
                <h5 className="text-[20px] font-semibold">Content Writing</h5>
                <p className="text-[13.5px] font-medium text-[#485057]">
                  Proin egestas, nisi vitae hendrerit maximus, mauris nunc
                  facilisis odi.
                </p>
              </div>
            </div>
          </div>
          <Ubutton
            value="Request Quote"
            primary={true}
            iconEnd={<img src={icon2}></img>}
          />
        </div>
      </div>
    </>
  );
}

export default Section5;
