import React from "react";
import image1 from "../../Images/image-1.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Details = () => {
  return (
    <div className="max-w-[100vw] max-h-[100vh]">
      <div className="flex flex-col md:flex-row justify-center md:justify-end items-center mt-[60px] lg:my-[120px]">
        <div className="w-full md:w-[40vw] 2xl:w-[614px] min-[1920px]:w-[779px] md:mr-[-15vw]">
          <AnimationOnScroll animateOnce={true} animateIn="animate__backInLeft">
            <img className="w-full" src={image1} alt="kadriMedTech"></img>
          </AnimationOnScroll>
        </div>

        {/* <div className="w-full md:w-[68vw] bg-[#ECF3FC] md:rounded-l-[25px] p-[64px] md:pb-[80px]  md:pt-[80px]  md:pr-[5.5vw]  md:pl-[18vw] -z-50 mt-[40px]"> */}
        <div className="w-full min-[1920px]:w-[1320px] 2xl:v-[80vh]  min-[1920px]:h-[987px]  min-[1920px]:pr-[108px] 2xl:pr-[76px] min-[1920px]:pl-[342px] min-[1920px]:py-[186px] bg-[#ECF3FC] md:rounded-l-[25px]">
          <div className="min-[1920px]:max-w-[870px]">
            <p className="inline-block  min-[1920px]:text-[24px] leading-[44px] font-[400] mb-[40px]">
              From preliminary market research and competitor assessments
              through to developing a full market entry strategy with ongoing
              support in the region, KadriMedTech is the only strategic business
              partner you will need for your MedTech company’s market entry and
              expansion in these dynamic regions of the world.
            </p>
            <p className="inline-block  min-[1920px]:text-[24px] leading-[44px] font-[400]">
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
  );
};

export default Details;
