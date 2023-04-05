import React from 'react'
import image1 from '../../Images/image-2.png'
import image2 from '../../Images/image-4.png'
function OurFocusedArea() {
    return (
        <>
            {/* left */}
            <div className='flex flex-col justify-center items-center xl:flex-row mt-[120px]'>
                <div className='bg-[#FFF0D0] w-full px-[60px] py-[100px] text-center    xl:pl-[5%] xl:pt-[6.8%] xl:pr-[23.5%] xl:pb-[6.8%] xl:inline-block xl:rounded-r-[24px] xl:w-[68%]'>
                {/* <div className='bg-[#FFF0D0] pl-[5%] pt-[6.8%] pr-[23.5%] pb-[6.8%] inline-block rounded-r-[24px] w-[68%]'> */}
                    <div>
                        <h1 className='font-[700] text-[40px] md:text-[58px]'>Our Focus Areas</h1>
                    </div>
                    <div>
                        <p className='text-[18px] md:text-[24px]'>In many MEA-countries, e.g the GCC-countries (Gulf Cooperation Council), Life Science
                            markets are seeing unprecedented growth but with this rapid expansion comes a more
                            complex and regulated business environment which can be daunting for individual
                            companies.
                            <br></br>
                            After successful roll out in the region, a business still needs a local strategy to maintain its
                            position and grow market share over time. KadriMedTech Consulting has a number of
                            business continuity services to ensure long term success in the MEA region.
                            <br></br>
                            We are able to assist in areas such as new Tender proposals, evaluation of agency and
                            distributorship agreements, and local media and marketing support.
                            <br></br>
                            Should your products get stuck in the complex regulatory process, we can also assist in
                            kick-starting the registration through our well developed MEA network. We also keep
                            abreast of any changes in local compliance and regulation on your behalf and, by keeping
                            you informed, we protect your brand and your Business.</p>
                    </div>
                </div>

                {/* <div className='w-[36%] mt-[100px] ml-[-250px]'> */}
                <div className='w-[80%] mx-auto mt-[-40px] xl:w-[36%] xl:mt-[100px] xl:ml-[-250px]'>
                    <img className='w-full' src={image1}></img>
                </div>
            </div>
            {/* right */}
            {/* <div className='flex justify-center items-center mt-[-50px]'> */}
            <div className='flex flex-col justify-center items-center mx-auto mt-[64px] xl:flex-row xl:mt-[-50px]'>
                <div className='xl:mr-[40px] xl:ml-[128px] w-[80%] xl:w-auto mx-auto xl:w-[627px]'>
                    <img className='w-full' src={image2}></img>
                </div>

                <div className='bg-[#F2F2F2] w-full px-[64px] py-[60px] xl:py-[100px]'>
                {/* <div className='bg-[#F2F2F2] rounded-l-[24px] w-[60%] px-[110px] py-[80px] border-4 border-[#fff]'> */}
                    <p className='text-[18px] md:text-[24px]'>
                        Navigating the cultural requirements for doing business in the region
                        <br></br>
                        We also understand the multi-faceted approach required to do business in the MEA
                        region and our clients have peace of mind
                        knowing that their strategy is linguistically,
                        culturally and commercially relevant.
                        <br></br>
                        Our networks in the MEA region reflect our decades of know-how
                        We are skilled at identifying potential networks for our clients and we move swiftly to
                        facilitate stakeholder relationships as soon as opportunities become apparent.
                        <br></br>
                        Beyond that, we continually work to keep the networks active. Being flexible in our outlook
                        allows us to tweak the client’s business strategy to maintain relevancy.
                    </p>
                </div>
            </div>
        </>
    )
}

export default OurFocusedArea