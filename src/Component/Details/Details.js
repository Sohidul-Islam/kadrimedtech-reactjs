import React from "react";
import image1 from "../../Images/image-1.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Details = () => {
  return (
    //  <div className='flex-col justify-center md:flex-col md:justify-end items-center mt-[60px] lg:mt-[120px]'>
    <div className="flex flex-col md:flex-row justify-center md:justify-end items-center mt-[60px] lg:mt-[120px]">

      <div className="w-full md:w-[40%] md:mr-[-15%]">
        <AnimationOnScroll animateIn="animate__backInLeft">
          <img className="w-full" src={image1} alt="kadriMedTech"></img>
        </AnimationOnScroll>
      </div>


      <div className="w-full md:w-[68%] bg-[#ECF3FC] md:rounded-l-[25px] p-[64px] md:pb-[6%]  md:pt-[8%]  md:pr-[5.5%]  md:pl-[18%] -z-50 mt-[40px]">
        <AnimationOnScroll animateIn="animate__backInRight">
          <div>
            <p className="inline-block 2xl:text-[32px] xl:text-[28px] lg:text-[20px] text-[16px]">
              From preliminary market research and competitor assessments through
              to developing a full market entry strategy with ongoing support in
              the region, KadriMedTech is the only strategic business partner you
              will need for your MedTech company’s market entry and expansion in
              these dynamic regions of the world.
              <br></br>
              <br></br>
              Our competitive advantage lies in our ability to consult on the full
              spectrum of Life Science products and services, including medtech,
              laboratory devices, E-health solutions, food supplements and
              cosmetics products etc. By collaborating with KadriMedTech
              Consulting, clients have a far quicker and smoother route to market
              entry, benefiting from our vast insight into today’s Life Science
              sector, our deep understanding of the business environment and our
              extensive network.
            </p>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Details;
