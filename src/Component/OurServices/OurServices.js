import React from "react";
import s1 from "../../Images/services-1.png";
import s2 from "../../Images/services-2.png";
import s3 from "../../Images/services-3.png";
const OurServices = () => {
  return (
    <div
      id="our-services"
      className="w-full bg-[#01112D] mt-[120px] px-[40px] lg:px-[110px] py-[84px]"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="text-[24px] lg:text-[58px] text-[#56B8FC] text-center font-[700] mb-[12px]">
          <h2 className="capitalize">Our Services</h2>
        </div>
        <div className="text-[14px] lg:text-[24px] text-[#ffffff] text-center leading-[36px] tracking-[0.8px] mt-[12px] mb-[67px] max-w-[1438px]">
          <p>
            At KMT Consulting we take a phased approach, investing time and
            resources in every step to ensure the strategy rollout is optimized
            and straight forward.
          </p>
        </div>


        {/* cards */}
        <div className="w-full flex flex-wrap xl:flex-nowrap xl:flex-row flex-row  gap-1 relative left-0 right-0 top-0">
          {/* card 1 */}
          <div className="xl:my-0 my-[20px] 2xl:w-[565px] 2xl:h-[688px] xl:w-[500px] xl:h-[650px] w-full h-auto bg-[#293750] relative top-0 left-0 right-0">
            <div className="xl:block hidden before:content-[''] before:absolute before:top-[-10px] before:right-0 before:-z-5 before:w-[50%] before:h-[6px] before:bg-[#56B8FC] ">
              </div>
            <div className="before:content-['1'] before:text-[#fff] before:text-center lg:before:text-[32px] md:before:text-[32px] sm:before:text-[24px] before:text-[20px] before:absolute before:top-[-26px] before:left-[45%] xl:before:right-[45%] md:before:right-[47%] before:right-[46%] sm:before:w-[8%] md:before:w-[6%] xl:before:w-[10%] xl:before:h-[7%] xl:before:h-[8%] md:before:h-[7%] sm:before:h-[6%] before:h-[5%] before:bg-[#01112D] before:border-2 before:border-[#d9d9d9] before:rounded-[50%]">
              
              <div>
                <div className="text-center inline-block bg-[#56b8fc] rounded-[35px] px-[8px] gap-[10px] text-[14px] md:text-[18px] leading-[32px] w-[26%] font-[600] text-[#fff] capitalize absolute top-[34px]  left-[37%] right-[37%]">
                  <h1>phase</h1>
                </div>
              </div>
            </div>
            <div className="w-full">
              <img className="w-full" src={s1}></img>
            </div>

            <div className="py-[32px] pl-[46px] pr-[32px] ">
              <div className="text-left">
                <h3 className="text-[16px] md:text-[24px] xl:text-[32px] font-[600] leading-[40px] tracking-[0.8px] text-[#56B8FC]">
                  Market entry
                </h3>
                <h2 className="text-[14px] md:text-[16px] xl:text-[20px] leading-[28px] font-[500] tracking-[0.8px] text-[#ffffff]">
                  Taking a strategic view of the planned market entry
                </h2>
              </div>
              <ul className="text-[#D9D9D9] mt-[10px] pl-[16px]">
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Strategy: which country and why.
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Advice on legal and regulatory processes.
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Marketing plans for MEA / GCC / specific markets for
                  manufacturers and / or distributors.
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Price analysis.
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Market research and Business Intelligence.
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Cultural and socioeconomic insight.
                </li>
              </ul>
            </div>
          </div>
          {/* card 2 */}
          <div className="xl:my-0 my-[40px] 2xl:w-[565px] 2xl:h-[688px] xl:w-[500px] xl:h-[650px] w-full h-auto bg-[#293750] relative top-0 left-0 right-0">
            <div className="xl:block hidden before:content-[''] before:absolute before:top-[-10px] before:right-0 before:-z-5 before:w-[105%] before:h-[6px] before:bg-[#56B8FC] ">

              </div>
            <div className="before:content-['2'] before:text-[#fff] before:text-center lg:before:text-[32px] md:before:text-[32px] sm:before:text-[24px] before:text-[20px] before:absolute before:top-[-26px] before:left-[45%] xl:before:right-[45%] md:before:right-[47%] before:right-[46%] sm:before:w-[8%] md:before:w-[6%] xl:before:w-[10%] xl:before:h-[7%] xl:before:h-[8%] md:before:h-[7%] sm:before:h-[6%] before:h-[5%] before:bg-[#01112D] before:border-2 before:border-[#d9d9d9] before:rounded-[50%]">
              
              <div>
                <div className="text-center inline-block bg-[#56b8fc] rounded-[35px] px-[8px] gap-[10px] text-[14px] md:text-[18px] leading-[32px] w-[26%] font-[600] text-[#fff] capitalize absolute top-[34px]  left-[37%] right-[37%]">
                  <h1>phase</h1>
                </div>
              </div>
            </div>
            <div className="w-full">
              <img className="w-full" src={s2}></img>
            </div>

            <div className="py-[32px] pl-[46px] pr-[32px] ">
              <div className="text-left">
                <h3 className="text-[16px] md:text-[24px] xl:text-[32px] font-[600] leading-[40px] tracking-[0.8px] text-[#56B8FC]">
                  Deployment in the new market
                </h3>
                <h2 className="text-[14px] md:text-[16px] xl:text-[20px] leading-[28px] font-[500] tracking-[0.8px] text-[#ffffff]">
                  Deploying the market entry process
                </h2>
              </div>
              <ul className="text-[#D9D9D9] mt-[10px] pl-[16px]">
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Partner searches (agent, importer and/or distributor)
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Handling of registrations process for medtech products
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Handling of the approval process for pharmaceutical products
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Contact and meetings with decision-makers and KOL
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Tenders
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Cultural and socioeconomic insight.
                </li>
              </ul>
            </div>
          </div>
          {/* card 3 */}
          <div className="xl:my-0 my-[40px] 2xl:w-[565px] 2xl:h-[688px] xl:w-[500px] xl:h-[650px] w-full h-auto bg-[#293750] relative left-0 right-0 top-0">
            <div className="xl:block hidden before:content-[''] before:absolute before:top-[-10px] before:left-[-5%] before:-z-5 before:w-[55%] before:h-[6px] before:bg-[#56B8FC] ">

              </div>
            <div className="before:content-['3'] before:text-[#fff] before:text-center lg:before:text-[32px] md:before:text-[32px] sm:before:text-[24px] before:text-[20px] before:absolute before:top-[-26px] before:left-[45%] xl:before:right-[45%] md:before:right-[47%] before:right-[46%] sm:before:w-[8%] md:before:w-[6%] xl:before:w-[10%] xl:before:h-[7%] xl:before:h-[8%] md:before:h-[7%] sm:before:h-[6%] before:h-[5%] before:bg-[#01112D] before:border-2 before:border-[#d9d9d9] before:rounded-[50%]">
              
              <div>
                <div className="text-center inline-block bg-[#56b8fc] rounded-[35px] px-[8px] gap-[10px] text-[14px] md:text-[18px] leading-[32px] w-[26%] font-[600] text-[#fff] capitalize absolute top-[34px]  left-[37%] right-[37%]">
                  <h1>phase</h1>
                </div>
              </div>
            </div>
            <div className="w-full">
              <img className="w-full" src={s3}></img>
            </div>

            <div className="py-[32px] pl-[46px] pr-[32px] ">
              <div className="text-left">
                <h3 className="text-[16px] md:text-[24px] xl:text-[32px] font-[600] leading-[40px] tracking-[0.8px] text-[#56B8FC]">
                  Support during and after market entry
                </h3>
                <h2 className="text-[14px] md:text-[16px] xl:text-[20px] leading-[28px] font-[500] tracking-[0.8px] text-[#ffffff]">
                  Business support during and after market entry
                </h2>
              </div>
              <ul className="text-[#D9D9D9] mt-[10px] pl-[16px]">
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Export / import / custom documents
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Legalization of documents
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Translations (mainly Arabic and Kurdish, also Farsi)
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Price analysis.
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Market research and Business Intelligence.
                </li>
                <li className="mb-[12px] text-[12px] md:text-[14px] xl:text-[16px] leading-[18px] tracking-[0.02em] before:content-['\2022'] before:text-[#56b8fc] before:ml-[-1em] before:text-[16px] before:font-bold before:inline-block before:w-[16px]">
                  Cultural and socioeconomic insight.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default OurServices;
