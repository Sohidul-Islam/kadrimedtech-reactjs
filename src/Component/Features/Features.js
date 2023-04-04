import React from 'react'
import image1 from '../../Images/f-1.png'
import image2 from '../../Images/f-2.png'
import FeatureCard from '../FeatureCard/FeatureCard'
const Features = () => {
    const features = [
        {
            id:1,
            image:image1,
            title:"our vision",
            desc: "To be the preferred and trusted strategic and operational partner for Nordic and European MedTech companies seeking to discover, enter and grow in the MEA region."
        },
        {
            id:2,
            image:image2,
            title:"our mission",
            desc: "To be the preferred and trusted strategic and operational partner for Nordic and European MedTech companies seeking to discover, enter and grow in the MEA region."
        }
    ]
  return (
    <div className='flex flex-col justify-center items-center xl:flex-row z-50'>
    {/* <div className='flex justify-center'> */}
        {
            features.map((feature)=> <FeatureCard key={feature.id} feature={feature}/>)
        }
    </div>
  )
}

export default Features