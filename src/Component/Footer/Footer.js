import React from "react";
import logo from "../../Images/logo-2.png";
import icon1 from "../../Icon/fb.svg";
import icon2 from "../../Icon/wa.svg";
import icon3 from "../../Icon/insta.svg";
import icon4 from "../../Icon/in.svg";
import arrowup from "../../Images/arrow-up.png";
import arrowright from "../../Images/arrow-right.png";
import './Footer.css'
const Footer = () => {
  return (
    <div className=" mt-[60px] lg:mt-[120px] relative top-0 left-0 right-0">
      {/* footer 2 */}
      <div className="bg-[#01112D]">
        <div className="grid grid-cols-1 lg:grid-cols-[_1fr,250px] lg:gird-flow-col gap-0">
          <div className="border-2 w-full border-[#293750] text-[white]">
            <div className="w-full h-[50%] border-2 border-[#293750] flex">
              {/* logo */}
              <div className="w-[50%] border-r-2 border-[#293750]">
                <img className="w-[140px] mx-auto my-[32px]" src={logo}></img>
              </div>
              <div className="w-[50%]">
                {/* location */}
                <div className="ml-0 lg:ml-[80px] my-[40px] text-center lg:text-left">
                  <h3 className="text-[18px] lg:text-[32px] leading-[42px] font-[600] uppercase w-full">
                    Location
                  </h3>
                  <p className="text-[14px] lg:text-[24px] leading-[36px] font-[400] w-full">
                    Stockholm, Sweden
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="w-full h-[50%] flex">
              <div className="w-[50%] border-r-2 border-[#293750] flex justify-center items">
                {/* Social media */}
                <span className="flex flex-row gap-[8px] items-center lg:gap-[42px] justify-center py-[42px]">
                  <span className="w-[32px] xl:w-[78px] lg:w-[60px]">
                    <img className="w-full" src={icon1}></img>
                  </span>
                  <span className="w-[32px] xl:w-[78px] lg:w-[60px]">
                    <img className="w-full" src={icon2}></img>
                  </span>
                  <span className="w-[32px] xl:w-[78px] lg:w-[60px]">
                    <img className="w-full" src={icon3}></img>
                  </span>
                  <span className="w-[32px] xl:w-[78px] lg:w-[60px]">
                    <img className="w-full" src={icon4}></img>
                  </span>
                </span>
              </div>
              <div className="w-[50%]">
                {/* email */}
                <div className="ml-0 lg:ml-[80px] my-[40px] text-center lg:text-left">
                  <h3 className="text-[18px] lg:text-[32px] leading-[42px] font-[600] uppercase w-full">
                    E-mail
                  </h3>
                  <p className="text-[14px] lg:text-[24px] leading-[36px] font-[400] w-full">
                    adam@kadri.se
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="back-to-top" className=" lg:block hidden lg:border-b-2 lg:border-[#293750] hover:bg-[#293750] duration-500 text-[white]">
            {/* back to top */}
            <div className="flex flex-col justify-center items-center py-[46px]  hover:pt-[40px] duration-500 ">
                <img id="up-arrow" className="w-[24px] mb-[20px]" src={arrowup}></img>
              <div className="w-[152px] py-[32px] mt-[20px]">
                <h3 className="text-[24px] leading-[42px] font-[300] uppercase rotate-90">
                  Back to Top
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div id="want-to-contact" className="text-[#fff] flex items-center gap-[27px] hover:bg-[#293750] pl-[108px] py-[46px]">
          <h3 className="text-[22px] lg:text-[54px] leading-[32px] lg:leading-[82px] font-[700] uppercase">
            Want to contact ?
          </h3>
          <img id="arrow-right" className="ml-[16px] lg:ml-[28px] w-[60px] lg:w-[117px]" src={arrowright}></img>
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
