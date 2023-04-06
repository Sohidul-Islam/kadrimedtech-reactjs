import React from 'react'

const FeatureCard = ({ feature }) => {

    return (
        <div className={`mx-[50px] bg-[#fff] rounded-[24px] xl:mt-[${feature?.id % 2 === 0 ? "-1000" : "-200"}px] mt-[${feature?.id % 2 === 0 ? "40" : "-100"}px]`}>
            <div>
                <div className='flex-col justify-center align-center text-center max-w-[688px] rounded-sm shadow-lg p-[20px] md:p-[16px] lg:p-[40px]'>
                    <div className='w-[80px] md:w-[90px] lg:w-[200px] lg:h-[200px] mx-auto mb-4'>
                        <img className='w-full' src={feature.image}></img>
                    </div>
                    <div className=' mb-4'>
                        <h3 className='text-[#56B8FC] text-[18px] lg:text-[32px] capitalize font-[700]'>{feature.title}</h3>
                    </div>
                    <div className='text-[14px] lg:text-[32px] mb-4'>
                        <p>{feature.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard