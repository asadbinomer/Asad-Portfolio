import React from "react";
import UButton from "../uButton/UButton";
import icon2 from "../../assets/icon2.svg";
import send from "../../assets/send.svg";
import calling from "../../assets/calling.svg";
import Freelancer from "../../assets/Freelancer.svg";

function footer() {
  return (
    <>
      <div className="w-full flex items-center justify-center bg2">
        <div className="w-full max-w-[1100px] py-[100px] flex flex-col items-center text-center gap-[60px] max-[450px]:flex-col max-[450px]:item-center max-[450px]:px-[15px] max-[450px]:py-[20px] max-[450px]:gap-[50px] max-[640px]:items-center max-[640px]:px-[50px] max-[640px]:py-[20px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[20px]">
          <div className="flex flex-col items-center text-center gap-[24px]">
            <h1 className="text-[48px] font-semibold max-[640px]:text-[40px] max-[450px]:text-[25px]">
              Have a project idea in mind. <br /> Get in touch and let's chat!
            </h1>
          </div>
          <div className="w-[100%] flex flex-wrap gap-[50px] justify-between items-center px-[120px] max-[640px]:px-[20px] max-[450px]:flex-col max-[640px]:items-center">
            <div className="flex flex-col items-center text-center gap-[24px]">
              <img src={send} alt="" className="w-[40px] h-[40px]" />
              <div className="flex flex-col gap-[10px]">
                <p className="texy-[16px] font-medium text-[#5E6971]">
                  Email Address
                </p>
                <p className="text-[20px] font-semibold">
                  howardstark@info.com
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-[24px]">
              <img src={calling} alt="" className="w-[40px] h-[40px]" />
              <div className="flex flex-col gap-[10px]">
                <p className="texy-[16px] font-medium text-[#5E6971]">
                  Phone Number
                </p>
                <p className="text-[20px] font-semibold">(406) 555-0120</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-[24px]">
              <img src={Freelancer} alt="" className="w-[40px] h-[40px]" />
              <div className="flex flex-col gap-[10px]">
                <p className="texy-[16px] font-medium text-[#5E6971]">
                  Available on Fiverr.
                </p>
                <p className="text-[20px] font-semibold">howard.stark123</p>
              </div>
            </div>
          </div>
          <UButton
            value="Request Quote"
            primary={true}
            iconEnd={<img src={icon2}></img>}
          />
        </div>
      </div>
      <div className="w-[100%] py-[32px] bg-[#121314] flex items-center justify-center text-center">
        <p className="text-[16px] font-medium text-[#5E6971]">
          All Content © 2006-Current Howard Stark and Respective Copyright
          Holders.
        </p>
      </div>
    </>
  );
}

export default footer;
