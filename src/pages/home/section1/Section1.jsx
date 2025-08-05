import React from "react";
import Logo1 from "../../../assets/CompanyLogo1.svg";
import Logo2 from "../../../assets/CompanyLogo2.svg";
import Logo3 from "../../../assets/CompanyLogo3.svg";
import Logo4 from "../../../assets/CompanyLogo4.svg";
import Logo5 from "../../../assets/CompanyLogo5.svg";
import Logo6 from "../../../assets/CompanyLogo6.svg";

function Section1() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-[1200px] flex items-center gap-[130px] justify-between max-[450px]:flex-col max-[450px]:px-[15px] max-[450px]:py-[50px] max-[450px]:gap-[50px] max-[640px]:px-[50px] max-[640px]:py-[80px] max-[640px]:gap-[50px] max-[640px]:flex-col max-[768px]:px-[100px] max-[768px]:py-[80px]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[48px] font-semibold leading-[60px] max-[450px]:text-[30px] max-[450px]:leading-[40px]">
              I’ve built modern web apps <br /> used by 500+ users worldwide.
            </h1>
            <p className="text-[19px] font-semibold text-[#7B848B] max-[450px]:text-[16px]">
              I specialize in building responsive UIs, integrating APIs, <br />
              and developing real-world features like file uploads, <br />
              authentication, and client-side storage using React & Tailwind CSS.
            </p>
          </div>
          <div className="flex flex-col gap-[0px]">
            <div className="flex items-center gap-[0px]">
              <img
                src={Logo1}
                alt="Project 1"
                className="w-[140px] h-[80px] max-[450px]:w-[120px]"
              />
              <img
                src={Logo2}
                alt="Project 2"
                className="w-[140px] h-[80px] max-[450px]:w-[120px]"
              />
              <img
                src={Logo3}
                alt="Project 3"
                className="w-[140px] h-[80px] max-[450px]:w-[120px]"
              />
            </div>
            <hr className="border-[2px] border-[#222628]" />
            <div className="flex items-center gap-[0px]">
              <img
                src={Logo4}
                alt="Project 4"
                className="w-[140px] h-[80px] max-[450px]:w-[120px]"
              />
              <img
                src={Logo5}
                alt="Project 5"
                className="w-[140px] h-[80px] max-[450px]:w-[120px]"
              />
              <img
                src={Logo6}
                alt="Project 6"
                className="w-[140px] h-[80px] max-[450px]:w-[120px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
 