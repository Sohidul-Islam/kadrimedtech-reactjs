import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
const FeatureCard = ({ feature }) => {

    return (
        <>
        {feature?.id ===1 ? <AnimationOnScroll animateOnce={true} animateIn="animate__backInUp"><div className={`mx-[50px] bg-[#fff] rounded-[24px] xl:mt-[-200px] mt-[-100px]`}>
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
        </AnimationOnScroll>:
        <AnimationOnScroll animateOnce={true} animateIn="animate__backInUp" delay={500}><div className={`mx-[50px] bg-[#fff] rounded-[24px] xl:mt-[-1000]px] mt-[40px]`}>
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
    </AnimationOnScroll>
    
    }
        </>
    )
}

export default FeatureCard