import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const OtherServicesCard = ({service}) => {
  return (
    <div className='w-[96%] h-auto mx-auto md:mx-0 md:w-[230px] lg:w-[300px] xl:w-[358px] 2xl:w-[430px] min-[1920px]:w-[555px] min-[1920px]:h-[616px] p-[12px] md:p-[24px] bg-[#ffffff] border-2 border-[#D9D9D9] rounded-[14px]'>
        <div className='w-[98%]  min-[1920px]:w-[507px]  min-[1920px]:h-[274px] mx-auto mb-[10px]'>
          <img className='w-full' src={service.image}></img> 
        </div>
        <div className='text-left 2xl:text-[24px] min-[1920px]:text-[32px] xl:text-[20px] lg:text-[18px] text-[16px] font-[600] leading-[24px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[40px] text-[#56B8FC] mb-[10px]'>
            <h3>{service.title}</h3>   
        </div>
        <div className='text-left text-[14px] 2xl:text-[16px] min-[1920px]:text-[24px] font-[400] leading:[10px] lg:leading-[24px] min-[1920px]:leading-[36px] text-[#858585]'>
            <p>{service.desc}</p>   
        </div>
    </div>
  )
}

export default OtherServicesCard