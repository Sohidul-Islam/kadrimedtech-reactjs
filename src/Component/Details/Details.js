import React from "react";
import image1 from "../../Images/image-1.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Details = () => {
  return (
    <div className="max-w-[100vw]">
      <div className="flex flex-col md:flex-row justify-center md:justify-end items-center mt-[60px] lg:my-[120px]">
        <div className="w-[80vw] md:w-[35vw] md:mr-[-8vw] lg:mr-[-10vw] xl:w-[400px] min-[1920px]:w-[779px] min-[1920px]:mr-[-303px]">
          <AnimationOnScroll animateOnce={true} animateIn="animate__backInLeft">
            <img className="w-full" src={image1} alt="kadriMedTech"></img>
          </AnimationOnScroll>
        </div>

        <div className="w-[100vw] px-[8vw] py-[5vh] md:rounded-l-[25px] md:w-[68vw]  md:pl-[150px] md:pr-[60px] md:py-[100px] lg:py-[170px] lg:pl-[180px] lg:pr-[80px] xl:py-[80px] 2xl:py-[100px] xl:pl-[230px]  min-[1920px]:w-[1320px]
min-[1920px]:py-[186px] min-[1920px]:pl-[342px] min-[1920px]:pr-[108px] bg-[#ECF3FC]">
          <div className="w-full lg:max-w-[50vw] min-[1920px]:max-w-[870px]">
            <p className="inline-block text-[14px] leading-[24px] md:leading-[24px] md:text-[12px] xl:text-[16px] 2xl:text-[1vw] xl:leading-[32px] 2xl:leading-[44px] mb-[16px]">
              From preliminary market research and competitor assessments
              through to developing a full market entry strategy with ongoing
              support in the region, KadriMedTech is the only strategic business
              partner you will need for your MedTech company’s market entry and
              expansion in these dynamic regions of the world.
            </p>
            <p className="inline-block text-[14px] leading-[24px] md:leading-[24px] md:text-[12px] xl:text-[16px] 2xl:text-[1vw] xl:leading-[32px] 2xl:leading-[44px]">
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
    </div >
  );
};

export default Details;
