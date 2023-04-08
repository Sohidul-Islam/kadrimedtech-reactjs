import React from "react";
import image1 from "../../Images/image-3.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
const MarketEntryStrategy = () => {
  return (
    <div className="mt-[60px] lg:mt-[120px] bg-[#ECF3FC] w-[96%] min-[1920px]:w-[1704px] min-[1920px]:h-[957px] xl:h-[1150px] 2xl:w-[1500px] 2xl:h-[1000px] mx-auto rounded-[16px]">
      <div className="">
        <div className="xl:max-w-[1000px] 2xl:max-w-[1171px] max-w-[700px] pt-[64px] lg:mx-auto mx-[40px] mb-[32px]">
          <h2 className="min-[1920px]:text-[40px] 2xl:text-[32px] xl:text-[28px] text-[16px] md:text-[18px] 2xl:leading-[64px] xl:leading-[32px] font-[700] 2xl:tracking-[0.8px] text-[#2E3144] text-center">
            Developing the market entry strategy Engagement and rollout in new
            territories Ongoing support
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center gap:[18px] lg:gap-[32px] mx-[20px] lg:mx-[40px]">
          <div className="w-full xl:w-[1000px] min-[1700px]:w-[1339px] flex flex-col gap-[12px]">
            <div className="bg-[#fff] p-[32px]">
              <p className="text-[#0C0D12CC]/80 text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[18px] min-[1920px]:text-[24px]">
                Whether you are in the early planning stages of taking your Life
                Science company into the regions in which we specialize or if
                you are already successfully established and merely looking to
                maintain your position or grow market share, KMT Consulting
                offers a number of different consulting services to support your
                business strategy.
              </p>
            </div>
            <div className="bg-[#fff] p-[32px]">
              <p className="text-[#0C0D12CC]/80 text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[18px] min-[1920px]:text-[24px]">
                Our consultants take time to determine your specific needs and
                understand your longerterm strategy. From there we tailor the
                timelines and scope of work accordingly. From identifying the
                decision makers relevant to you, to registration processes,
                translations and ensuring you have the appropriate marketing
                material, everything we do is about opening doors on your
                behalf.
              </p>
            </div>
            <div className="bg-[#fff] p-[32px]">
              <p className="text-[#0C0D12CC]/80 text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[18px] min-[1920px]:text-[24px]">
                We continually add new services as the markets change and we
                believe in developing agile strategies that allow our clients to
                respond quickly and which enable a proactive approach.
              </p>
            </div>
          </div>
          <div className="w-[40vw] xl:w-[500px] 2xl:w-[350px] min-[1300px]:w-[500px] min-[1920px]:w-[553px] mt-[12px] lg:mb-0 lg:mt-0">
          <AnimationOnScroll animateOnce={true} animateIn="animate__backInRight"> <img className="h-[80%]" src={image1}></img></AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketEntryStrategy;
