import React from "react";
import image from "../../Images/image-3.png";
import logo from "../../Images/logo-1.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <>
      <div className="flex flex-col  lg:flex-row  items-center mt-[120px] lg:mt-[120px] relative top-0 left-0 right-0 bottom-0">
        <div className="w-full relative top-0 left-0 right-0 bottom-0 bg-[#01112D] px-[40px] max-[768px]:pt-[160px] md:pt-[60px] pb-[150px] lg:rounded-r-[24px] lg:w-[696px] lg:pr-[150px] lg:pb-[300px] lg:pl-[40px] lg:pt-[60px] xl:w-[870px] xl:pr-[200px] xl:pb-[350px] xl:pl-[65px] xl:pt-[100px] 2xl:w-[1044px] 2xl:pr-[230px] 2xl:pb-[400px] 2xl:pt-[140px] 2xl:pl-[76px] min-[1920px]:w-[1320px] min-[1920px]:pr-[341px] min-[1920px]:pl-[109px] min-[1920px]:pb-[511px] min-[1920px]:pt-[173px] text-left ">
          {/* <div className="w-full bg-[#181A23] px-[28px] lg:px-[64px] pt-[120px] lg:pt-[160px] pb-[200px] lg:w-[100%] xl:w-[68%] lg:pl-[5%] lg:pt-[13%] lg:pr-[12%] lg:pb-[31%] xl:rounded-r-[24px] text-left "> */}
          <div className="mb-[25px]">
            <h3 className="text-[#fff] text-[40px] md:text-[3vw] min-[1920px]:text-[58px] leading-[5vw] min-[1920px]:leading-[96px] font-[700] capitalize">
              About us
            </h3>
          </div>
          <div className="min-[1920px]:w-[870px]">
            <p className="text-[#fff] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[1.4vw] 2xl:text-[1.2vw] min-[1920px]:text-[28px] min-[1920px]:leading-[42px] tracking-[.02em] mb-[16px] ">
              At KMT Consulting we set ourselves apart from other consultancies
              with our combination of broad experience ,deep understanding and
              strong relations in the MedTech sector, our insight into the MEA
              region, and knowledge of what it takes to enter and grow a brand
              in these business landscapes.It is hard to find a single private
              consultancy offering not just solutions and support for the entire
              spectrum of services required by the typical Life Science company
              but also with such a deep understanding of region-specific market
              entry processes.
            </p>
            <p className="text-[#fff] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[1.4vw] 2xl:text-[1.2vw] min-[1920px]:text-[28px] min-[1920px]:leading-[42px] tracking-[.02em] mb-[16px]">
              KMT is a leading provider of outsourced services, business
              development consulting and regulatory affairs for Swedish /
              Scandinavian and European Life Science companies growing their
              presence in the Middle East& Africa.
            </p>
            <p className="text-[#fff] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[1.4vw] 2xl:text-[1.2vw] min-[1920px]:text-[28px] min-[1920px]:leading-[42px] tracking-[.02em]">
              We have gained a competitive advantage through our ability to
              consult on the entire spectrum of MedTech products and services in
              a number of regions.
            </p>
          </div>
          <div className="lg:hidden md:relative inline-block md:top-0 md:left-0 md:right-0 md:bottom-0 z-50 w-full">
            <div className="absolute top-[-50px] md:top-[-450px] max-[1023px]:left-[50%] max-[1023px]:translate-x-[-75px] lg:top-[-200px] lg:right-[-250px] xl:right-[-300px] 2xl:right-[-350px] min-[1920px]:right-[-407px] ">
              {/* <div className="absolute top-[-50px] sm:left-[37.5%] left-[35%] sm:right-[37.5%] right-[35%] sm:w-[25%] w-[30%] sm:h-[25%] h-[30%] xl:right-[26%] 2xl:right-[20%] 2xl:top-[50%] xl:top-[40%] xl:left-[55%] z-50"> */}
              <div className="w-[150px] lg:w-[20vw] min-[1920px]:w-[362px]  min-[1920px]:h-[362px]">
                <AnimationOnScroll
                  animateOnce={true}
                  animateIn="animate__fadeIn"
                  delay={200}
                >
                  <img className="w-full" src={logo}></img>
                </AnimationOnScroll>
              </div>
            </div>
          </div>

          <div className="relative top-[50px] right-0 left-0 bottom-0">
            <div className="max-[769px]:hidden inline-block absolute lg:top-[50px] xl:top-[60px] 2xl:top-[100px] min-[1920px]:top-[50px] right-[0px]">
              <div className="lg:w-[400px] xl:w-[450px] 2xl:w-[450px] min-[1920px]:w-[625px] lg:left-[100px] xl:left-[125px] 2xl:left-[150px]  absolute min-[1920px]:left-[181px] lg:bottom-[100px] xl:bottom-[125px] 2xl:bottom-[150px]  min-[1920px]:bottom-[181px]">
                <AnimationOnScroll
                  animateOnce={true}
                  animateIn="animate__backInRight"
                >
                  <img className="w-full" src={image} alt="kadriMedTech"></img>
                </AnimationOnScroll>
              </div>
              <div className="lg:w-[200px] xl:w-[250px] 2xl:w-[300px] min-[1920px]:w-[362px] absolute left-0 bottom-0">
                <AnimationOnScroll
                  animateOnce={true}
                  animateIn="animate__fadeIn"
                  delay={700}
                >
                  <img className="w-full" src={logo}></img>
                </AnimationOnScroll>
              </div>
            </div>
          </div>

          <div className="w-[30vw] mx-auto lg:hidden">
                <AnimationOnScroll
                  animateOnce={true}
                  animateIn="animate__backInRight"
                >
                  <img className="w-full" src={image} alt="kadriMedTech"></img>
                </AnimationOnScroll>
              </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default About;
