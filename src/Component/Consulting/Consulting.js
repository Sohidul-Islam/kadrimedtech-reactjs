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
    {
      id: 5,
      desc: `Ongoing support`,
      icon: icon7,
    },
  ];
  return (
    <div className="mt-[60px] lg:mt-[120px] w-[90%] lg:max-w-[912px] xl:max-w-[1140px] 2xl:max-w-[1368px] min-[1920px]:max-w-[1706px] mx-auto">
       <AnimationOnScroll animateOnce={true} animateIn="animate__backInLeft">
      <div className="flex md:flex-wrap xl:flex-nowrap items-center flex-col md:flex-row gap-[55px]">
        <div className="text-center xl:text-left text-[24px] md:text-[40px] lg:text-[50px] xl:text-[64px] font-[700]  w-full xl:max-w-[358px] 2xl:max-w-[430px]  min-[1920px]:max-w-[535px]">
          <h3 className="">Consulting in the MEA region</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px] ">
          {row1.map((row) => {
            return (
              <div
                key={row.id}
                className="p-[24px] mx-[0px] rounded-[16px] border-2 border-[#D9D9D9] max-w-[100%] md:max-w-[50%] xl:max-w-[50%] 2xl:max-w-[430px]  min-[1920px]:max-w-[546px] h-auto min-[1920px]:max-h-[311px]"
              >
                <div>
                  <div>
                    <div className="bg-[#ECF7FF] inline-block p-6 rounded-[50%]">
                      <img src={row.icon}></img>
                    </div>
                    <div>
                      <p className="text-[24px]">{row.desc}</p>
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
      <div className="flex flex-wrap justify-center 2xl:flex-nowrap items-center flex-col md:flex-row gap-[24px] mt-[16px]">
        {row2.map((row) => {
          return (
            <>
              {row.id === 1 && (
                <div
                  key={row.id}
                  className="p-[24px] mx-[0px] rounded-[16px] border-2 border-[#D9D9D9] w-full md:max-w-[50%] xl:max-w-[230px] 2xl:max-w-[276px] min-[1920px]:max-w-[353px] h-auto min-[1920px]:max-h-[227px]"
                >
                  <div>
                    <div>
                      <div className="bg-[#ECF7FF] inline-block p-6 rounded-[50%]">
                        <img src={row.icon}></img>
                      </div>
                      <div>
                        <p className="text-[24px]">{row.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {row.id === 2 && (
                <div
                  key={row.id}
                  className="p-[24px] mx-[0px] rounded-[16px] border-2 border-[#D9D9D9] w-full md:max-w-[48%] xl:max-w-[230px] 2xl:max-w-[276px] min-[1920px]:max-w-[353px] h-auto min-[1920px]:max-h-[227px]"
                >
                  <div>
                    <div>
                      <div className="bg-[#ECF7FF] inline-block p-6 rounded-[50%]">
                        <img src={row.icon}></img>
                      </div>
                      <div>
                        <p className="text-[24px]">{row.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {row.id === 3 && (
                <div
                  key={row.id}
                  className="p-[24px] mx-[0px] rounded-[16px] border-2 border-[#D9D9D9] w-full md:max-w-[48%] xl:max-w-[230px] 2xl:max-w-[276px] min-[1920px]:max-w-[353px] h-auto min-[1920px]:max-h-[227px]"
                >
                  <div>
                    <div>
                      <div className="bg-[#ECF7FF] inline-block p-6 rounded-[50%]">
                        <img src={row.icon}></img>
                      </div>
                      <div>
                        <p className="text-[24px]">{row.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {row.id === 4 && (
                <div
                  key={row.id}
                  className="p-[24px] mx-[0px] rounded-[16px] border-2 border-[#D9D9D9] w-full md:max-w-[48%] xl:max-w-[230px] 2xl:max-w-[276px] min-[1920px]:max-w-[353px] h-auto min-[1920px]:max-h-[227px]"
                >
                  <div>
                    <div>
                      <div className="bg-[#ECF7FF] inline-block p-6 rounded-[50%]">
                        <img src={row.icon}></img>
                      </div>
                      <div>
                        <p className="text-[24px]">{row.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {row.id === 5 && (
                <div
                  key={row.id}
                  className="p-[24px] mx-[0px] rounded-[16px] border-2 border-[#D9D9D9] w-full md:max-w-[48%] xl:max-w-[194px] h-auto min-[1920px]:max-h-[227px]"
                >
                  <div>
                    <div>
                      <div className="bg-[#ECF7FF] inline-block p-6 rounded-[50%]">
                        <img src={row.icon}></img>
                      </div>
                      <div>
                        <p className="text-[24px]">{row.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Consulting;
