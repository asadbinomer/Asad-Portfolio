import React from "react";
import UButton from "../../../component/uButton/UButton";
import MyImage1 from "../../../assets/MyImage.png";
import arrow from "../../../assets/arrow.svg";

function HeroSection() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-[1100px] pb-[70px] pt-[45px] flex items-center gap-[40px] justify-between max-[450px]:flex-col max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px]">
          <img
            src={MyImage1}
            alt=""
            className="w-[480px] h-[490px] max-[450px]:w-full max-[450px]:h-full max-[640px]:w-full max-[640px]:h-full"
          />
          <div className="max-w-[550px] flex flex-col items-start gap-[32px] max-[450px]:gap-[20px]">
            <div className="flex flex-col gap-[24px] max-[450px]:gap-[15px]">
              <div className="flex items-center gap-[24px]">
                <div className="w-[88px] h-[2px] bg-[#1777E5]"></div>
                <p className="text-[18px] font-semibold text-[#1777e5]">
                  Visual Designer <br />
                  Webflow Developer
                </p>
              </div>
              <h1 className="text-[72px] font-semibold leading-[80px] max-[450px]:text-[51px] max-[450px]:leading-[55px]">
                Hello, I’m <br />
                Asadullah
              </h1>
            </div>
            <p className="text-[18.5px] font-medium text-[#7B848B] max-[450px]:text-[15px]">
              Hello, I'm a passionate Visual Designer, Webflow Developer and
              part time freelancer with a keen eye for details.
            </p>
            <div className="flex items-center justify-between gap-[22px]">
              <UButton value="Say Hello" primary={true} />
              <UButton
                value="View Portfolio"
                iconEnd={<img src={arrow}></img>}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
