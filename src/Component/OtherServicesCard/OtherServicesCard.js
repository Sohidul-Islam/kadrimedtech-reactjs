import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const OtherServicesCard = ({service}) => {
  return (
    <div className='w-[96%] h-auto mx-auto md:mx-0 md:w-[555px] md:h-[616px] p-[12px] md:p-[24px] bg-[#ffffff] border-2 border-[#D9D9D9] rounded-[14px]'>
        <div className='w-[98%] md:w-[507px] md:h-[274px] mx-auto mb-[10px]'>
          <img className='w-full' src={service.image}></img> 
        </div>
        <div className='text-left md:text-[32px] text-[20px] font-[600] md:leading-[40px] leading-[24px] text-[#56B8FC] mb-[10px]'>
            <h3>{service.title}</h3>   
        </div>
        <div className='text-left text-[16px] md:text-[24px] font-[400] leading:[10px] md:leading-[36px] text-[#858585]'>
            <p>{service.desc}</p>   
        </div>
    </div>
  )
}

export default OtherServicesCard