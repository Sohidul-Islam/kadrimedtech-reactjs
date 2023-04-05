import React from "react";
import logo from "../../Images/logo-2.png";
import icon1 from "../../Icon/fb.svg";
import icon2 from "../../Icon/wa.svg";
import icon3 from "../../Icon/insta.svg";
import icon4 from "../../Icon/in.svg";
import arrowup from "../../Images/arrow-up.png";
import arrowright from "../../Images/arrow-right.png";
const Footer = () => {
  return (
    <div>
        <div className="bg-[#01112D] mt-[120px]">
      <div className=" grid grid-rows-2 grid-cols-1 lg:grid-cols-3 lg:gird-flow-col gap-0">
        <div className="border-2  border-[#293750] text-[white]">
          <img className="w-[140px] mx-auto my-[32px]" src={logo}></img>
        </div>
        {/*  */}
        <div className="border-2 border-[#293750] text-[white]">
          <div className="ml-0 lg:ml-[80px] my-[40px] text-center lg:text-left">
            <h3 className="text-[32px] leading-[42px] font-[600] uppercase w-full">
              Location
            </h3>
            <p className="text-[24px] leading-[36px] font-[400] w-full">
              Stockholm, Sweden
            </p>
          </div>
        </div>
        {/*  */}
        <div className="border-2 row-span-2 border-[#293750] text-[white] py-[43px]">
          <div className="w-full h-full flex flex-col gap-[40px] items-center">
            <div className="w-[24px]">
              <img className="w-full" src={arrowup}></img>
            </div>
            <div className="w-[152px] py-[32px]">
              <h3 className="text-[24px] leading-[42px] font-[300] uppercase rotate-90">
                Back to Top
              </h3>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=" border-2 border-[#293750] text-[white]">
          <span className="flex flex-row gap-[16px] lg:gap-[42px] justify-center py-[42px]">
            <span className="w-[50px] lg:w-[78px]">
              <img className="w-full" src={icon1}></img>
            </span>
            <span className="w-[50px] lg:w-[78px]">
              <img className="w-full" src={icon2}></img>
            </span>
            <span className="w-[50px] lg:w-[78px]">
              <img className="w-full" src={icon3}></img>
            </span>
            <span className="w-[50px] lg:w-[78px]">
              <img className="w-full" src={icon4}></img>
            </span>
          </span>
        </div>
        {/*  */}
        <div className="border-2 border-[#293750] text-[white]">
          <div className="ml-0 lg:ml-[80px] my-[40px] text-center lg:text-left">
            <h3 className="text-[32px] leading-[42px] font-[600] uppercase w-full">
              E-mail
            </h3>
            <p className="text-[24px] leading-[36px] font-[400] w-full">
              adam@kadri.se
            </p>
          </div>
        </div>
        {/*  */}
      </div>

      <div className="border-2 row-span-2 border-[#293750] text-[white] pl-[28px] lg:pl-[108px] py-[46px]">
        <div className="flex justify-center lg:justify-start items-center">
          <h3 className="text-[22px] lg:text-[54px] leading-[32px] lg:leading-[82px] font-[700] uppercase">
            Want to contact ?
          </h3>
          <img className="ml-[16px] lg:ml-[28px] w-[60px] lg:w-[117px]" src={arrowright}></img>
        </div>
      </div>
    </div>

{/*  */}
    <div className="bg-[#4a72b8] mt-[120px]">
    <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-[_1fr,250px] lg:gird-flow-col gap-0">
    <div className="border-2  border-[#293750] text-[white]">
          <img className="w-[140px] mx-auto my-[32px]" src={logo}></img>
        </div>
    <div className="border-2  border-[#293750] text-[white]">
          <img className="w-[140px] mx-auto my-[32px]" src={logo}></img>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Footer;

/*

<div className="w-[834px] height-[161px] border-2 border-[#293750] text-[white]">
       
      </div>


*/
