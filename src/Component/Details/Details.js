import React from "react";
import image1 from "../../Images/image-1.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Details = () => {
  return (
    <div className="aspect-[16/9] flex flex-col justify-end items-end">
      <div>
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center">
          <div className="md:w-[280px] lg:w-[350px] xl:w-[520px] 2xl:w-[614px] min-[1920px]:w-[779px] min-[1920px]:h-[795px] md:mr-[-70px] lg:mr-[-80px] xl:mr-[-150px] 2xl:mr-[-200px] min-[1920px]:mr-[-287px]">
            <AnimationOnScroll animateOnce={true} animateIn="animate__backInLeft">
              <img className="w-full" src={image1} alt="kadriMedTech"></img>
            </AnimationOnScroll>
          </div>

          <div className="md:w-[528px] lg:w-[704px] xl:w-[880px] 2xl:w-[1056px] md:py-[32px] lg:py-[60px] xl:py-[60px] 2xl:py-[80px] md:pr-[50px] lg:pr-[60px] xl:pr-[70px] 2xl:pr-[76px] md:pl-[100px] lg:pl-[130px] xl:pl-[200px] 2xl:pl-[250px] min-[1920px]:h-[987px] 
          min-[1920px]:w-[1320px] min-[1920px]:py-[107px] min-[1920px]:pr-[104px] min-[1920px]:pl-[346px] bg-[#01112D] rounded-l-[24px]">
            <div className="text-[#FFFFFF]">
              <div className="md:mb-[14px] lg:mb-[16px] xl:mb-[24px] 2xl:mb-[29px]">
                <h3 className="md:text-[24px] lg:text-[28px] lg:leading-[36px] xl:text-[32px] 2xl:text-[40px] min-[1920px]:text-[60px] font-[600]  2xl:leading-[48px] min-[1920px]:leading-[96px] tracking-[0.7px] ">
                  Kadri<span className="text-[#0263C9]">Med</span>
                  <span className="text-[#56B8FC]">Tech</span>
                </h3>
              </div>
              <div>
                <p className="md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] min-[1920px]:text-[24px] md:leading-[14px] lg:leading-[20px] xl:leading-[28px] 2xl:leading-[30px] min-[1920px]:leading-[36px] tracking-[0.7px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[24px] min-[1920px]:mb-[36px]">
                  KadriMedTech Consulting offers specialist B2B consulting services and networking opportunities for Life Science and healthcare companies seeking to enter the Middle East & Africa regions
                </p>
                <p className="md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] min-[1920px]:text-[24px] md:leading-[14px] lg:leading-[20px] xl:leading-[28px] 2xl:leading-[30px] min-[1920px]:leading-[36px] tracking-[0.7px] md:mb-[12px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[24px] min-[1920px]:mb-[36px]">
                  From preliminary market research and competitor assessments
                  through to developing a full market entry strategy with ongoing
                  support in the region, KadriMedTech is the only strategic business
                  partner you will need for your MedTech company’s market entry and
                  expansion in these dynamic regions of the world.
                </p>
                <p className="md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] min-[1920px]:text-[24px] md:leading-[14px] lg:leading-[20px] xl:leading-[28px] 2xl:leading-[30px] min-[1920px]:leading-[36px] tracking-[0.7px] ">
                  Our competitive advantage lies in our ability to consult on the
                  full spectrum of Life Science products and services, including
                  medtech, laboratory devices, E-health solutions, food supplements
                  and cosmetics products etc. By collaborating with KadriMedTech
                  Consulting, clients have a far quicker and smoother route to
                  market entry, benefiting from our vast insight into today’s Life
                  Science sector, our deep understanding of the business environment
                  and our extensive network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Details;
