import React from "react";
import icon1 from "../../Icon/icon-1.png";
import icon2 from "../../Icon/icon-2.png";
import icon3 from "../../Icon/icon-3.png";
import icon4 from "../../Icon/icon-4.png";
import icon5 from "../../Icon/icon-5.png";
import icon6 from "../../Icon/icon-6.png";
import icon7 from "../../Icon/icon-7.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Consulting = () => {
  const row1 = [
    {
      id: 1,
      desc: "Full service consulting, from preliminary research to ensuring long-term market presence.",
      icon: icon1,
    },
    {
      id: 2,
      desc: "Building strategies that are aligned to the local business environment and culture.",
      icon: icon2,
    },
  ];
  const row2 = [
    {
      id: 1,
      desc: "Business delegations and trade events.",
      icon: icon3,
    },
    {
      id: 2,
      desc: "Retaining market position after entry.",
      icon: icon4,
    },
    {
      id: 3,
      desc: "Developing the market entry strategy",
      icon: icon5,
    },
    {
      id: 4,
      desc: "Engagement and rollout in new territories",
      icon: icon6,
    },

  ];


  return (
    <div className="mt-[60px] lg:mt-[120px] md:max-w-[682px] lg:max-w-[910px] xl:max-w-[1138px] 2xl:max-w-[1364px] min-[1920px]:max-w-[1706px] mx-auto">
      <AnimationOnScroll animateOnce={true} animateIn="animate__backInLeft">
        <div className="flex flex-wrap md:flex-nowrap items-center flex-col md:flex-row md:gap-[24px] lg:gap-[28px] xl:gap-[36px] 2xl:gap-[55px]">
          <div className="md:text-left text-[24px] md:text-[24px] lg:text-[36px] xl:text-[40px] 2xl:text-[56px] min-[1920px]:text-[64px] font-[700]  w-full xl:max-w-[358px] 2xl:max-w-[430px]  min-[1920px]:max-w-[535px]">
            <h3 className="">Consulting in the MEA region</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px] ">
            {row1.map((row) => {
              return (
                <div
                  key={row.id}
                  className="p-[24px] mx-[0px] rounded-[16px] border-2 border-[#D9D9D9] xl:max-w-[50%] 2xl:max-w-[430px]  min-[1920px]:max-w-[546px] h-auto min-[1920px]:max-h-[311px]"
                >
                  <div>
                    <div>
                      <div className="md:w-[70px] lg:w-[85px] xl:w-[70px] 2xl:w-[97px] bg-[#ECF7FF] inline-block md:p-4 2xl:p-6 rounded-[50%]">
                        <img className="w-full" src={row.icon} alt="consulting icon"></img>
                      </div>
                      <div>
                        <p className="md:text-[12px] lg:text-[14px] xl:text-214px] 2xl:text-[18px] min-[1920px]:text-[24px]">{row.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimationOnScroll>
      {/* row 2 */}
      <AnimationOnScroll animateOnce={true} animateIn="animate__backInRight">
        <div className="flex gap-[25px] mt-[24px]">
          <div className="flex gap-[25px]">
            {row2.map((row) => {
              return (

                <div
                  key={row.id}
                  className="p-[24px] mx-[0px] rounded-[16px] border-2 border-[#D9D9D9] md:max-w-[120px] lg:max-w-[230px] 2xl:max-w-[276px] min-[1920px]:max-w-[353px] h-auto min-[1920px]:max-h-[227px]"
                >
                  <div>
                    <div>
                      <div className="md:w-[70px] lg:w-[85px] xl:w-[70px] 2xl:w-[97px] bg-[#ECF7FF] inline-block md:p-4 2xl:p-6 rounded-[50%]">
                        <img className="w-full" src={row.icon} alt="consulting icon"></img>
                      </div>
                      <div>
                        <p className="md:text-[12px] lg:text-[14px] xl:text-[12px] 2xl:text-[18px] min-[1920px]:text-[24px]">{row.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* specific one */}
          <div
            className="p-[24px] mx-[0px] rounded-[16px] border-2 border-[#D9D9D9] md:max-w-[110px] lg:max-w-[130px] xl:max-w-[150px] min-[1920px]:max-w-[194px] min-[1920px]:max-h-[227px]"
          >
            <div>
              <div>
                <div className="md:w-[70px] lg:w-[85px] xl:w-[70px] 2xl:w-[97px] bg-[#ECF7FF] inline-block md:p-4 2xl:p-6 rounded-[50%]">
                  <img className="w-full" src={icon7} alt="consulting icon"></img>
                </div>
                <div>
                  <p className="md:text-[12px] lg:text-[14px] xl:text-[14px]22xl:text-[18px] min-[1920px]:text-[24px]">Ongoing support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Consulting;
