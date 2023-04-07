import React from 'react'
import image1 from '../../Images/services-4.png'
import image2 from '../../Images/services-5.png'
import image3 from '../../Images/services-6.png'
import OtherServicesCard from '../OtherServicesCard/OtherServicesCard'
import { AnimationOnScroll } from 'react-animation-on-scroll'
const OtherServices = () => {

    const services = [
        {
            id:1,
            image:image1,
            title:"MEA/GCC-region agent",
            desc:"We can also assist by acting as a local agent for certain services and products, either for the entire MEA-region or specific countries.",
        },
        {
            id:2,
            image:image2,
            title:"Tailor-made smaller business delegations",
            desc:"Starting with 2 or 3 companies or more. Our delegations can focus on specific areas such as Respiratory, Wound care, diabetes, Home care, eHealth etc,",
        },
        {
            id:3,
            image:image3,
            title:"Exhibitions",
            desc:"We have a strong presence at many industry trade shows, including Arab Health andMedica. Partnering with us takes the hassle out of trade events, leaving you free to focus on networking while we handle the rest.",
        },
    ]
  return (
    <div className='mt-[60px] lg:mt-[120px]'>

        <div className='text-center text-[32px] md:text-[58px] font-[700] leading-[96px] text-[#0C0D12] mb-[32px]'>
            <h1>Other Services</h1>
        </div>
        <AnimationOnScroll animateOnce={true} animateIn="animate__backInUp">
        <div className='flex justify-center flex-wrap gap-[18px]'>
            {
                services.map((service)=> <OtherServicesCard key={service.id} service={service}/>)
            }
        </div>
        </AnimationOnScroll>
    </div>
  )
}

export default OtherServices