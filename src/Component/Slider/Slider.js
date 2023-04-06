import React from "react";
import s1 from "../../Images/bg-1.png";
import "./Slider.css";
import Navbar from "../Navbar/Navbar";
const Slider = ({ navItem }) => {
  const sliderImages = [
    {
      id: 1,
      path: s1,
      desc: "KadriMedTech Consulting offers specialist B2B consulting services and networking opportunities for Life Science and healthcare companies seeking to enter the Middle East & Africa regions",
    },
  ];
  return (
    <div className="relative top-0 left-0 bottom-0 w-full">
      <div className="-z-10">
        <Navbar navItem={navItem} />
        <div className="w-[100vw]">
          {sliderImages.map((image) => {
            return (
              <div key={image.id}>
                <div className="w-[100vw] lg:h-[80vh] xl:h-[100vh] 2xl:h-[100vh]">
                  <img
                    className="w-full h-full object-cover"
                    key={image.id}
                    src={image.path}
                  ></img>
                </div>
                <div className="absolute left-[20px] md:left-[40px] 2xl:left-[108px] bottom-[10px] md:bottom-[40px] 2xl:w-[1123px] h-[100px] sm:h-[150px] md:h-[200px] lg:h-[450px] xl:h-[500px]  2xl:h-[570px] pr-[40px]">
                  <div className="flex items-center gap-[16px] md:gap-[24px] 2xl:gap-[65px]">
                    <div className="w-[8px] xl:w-[8px] 2xl:w-[8px] rounded-[110px] h-[100px] sm:h-[150px] md:h-[200px] lg:h-[450px] xl:h-[500px] 2xl:h-[570px] bg-[#D9D9D93D]/25">
                      <div className="w-full h-[33%] bg-[#ffff] rounded-md"></div>
                      <div className="w-full h-[33%] bg-transparent rounded-md"></div>
                      <div className="w-full h-[33%] bg-transparent rounded-md"></div>
                    </div>
                    <div className="md:max-w-[600px] xl:max-w-[950px] 2xl:w-[1050px]">
                      <div className="text-[#fff] md:w-[700px] 2xl:w-[1050px]">
                        <h3 className="text-[12px] sm:text-[24px] md-text-[32px] lg:text-[40px] xl:text-[60px] 2xl:text-[94px] 2xl:leading-[141px] font-[600]">
                          Kadri<span className="text-[#0263C9]">Med</span>
                          <span className="text-[#56B8FC]">Tech</span>
                        </h3>
                      </div>
                      <div className="pr-[40px]">
                        <p className="text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] 2xl:leading-[48px] text-[#fff] md:w-[700px] 2xl:w-[1050px]">
                          {image.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
