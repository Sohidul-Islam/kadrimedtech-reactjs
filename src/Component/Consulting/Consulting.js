import React from 'react'
import icon1 from '../../Icon/icon-1.png'
import icon2 from '../../Icon/icon-2.png'
import icon3 from '../../Icon/icon-3.png'
import icon4 from '../../Icon/icon-4.png'
import icon5 from '../../Icon/icon-5.png'
import icon6 from '../../Icon/icon-6.png'
import icon7 from '../../Icon/icon-7.png'
import ConsultingCard from '../ConsultingCard/ConsultingCard'
const Consulting = () => {

    const cardContents = [
        {
            id: 1,
            desc: 'Full service consulting, from preliminary research to ensuring long-term market presence.',
            icon: icon1
        },
        {
            id: 2,
            desc: 'Building strategies that are aligned to the local business environment and culture.',
            icon: icon2
        },
        {
            id: 3,
            desc: 'Business delegations and trade events.',
            icon: icon3
        },
        {
            id: 4,
            desc: 'Retaining market position after entry.',
            icon: icon4
        },
        {
            id: 5,
            desc: 'Developing the market entry strategy',
            icon: icon5
        },
        {
            id: 6,
            desc: 'Engagement and rollout in new territories',
            icon: icon6
        },
        {
            id: 7,
            desc: `Ongoing support`,
            icon: icon7
        },
    ]
    return (
        <div className='mt-[120px] w-[80%] mx-[10%]'>
            <div className='flex flex-wrap justify-center flex-col md:flex-row md:justify-stretch'>
            {/* <div className='flex flex-wrap justify-stretch'> */}
                {/* <div className='text-[64px] font-[700] mr-[43px] my-[16px] w-[535px]'> */}
                <div className='text-[40px] lg:text-[50px] xl:text-[64px] font-[700] text-center md:mr-[43px] md:my-[16px] md:w-[28%] md:text-left'>
                <h3 className='my-auto'>Consulting in the MEA region</h3>
                </div>
                {
                    cardContents.map((item) => <ConsultingCard key={item.id} cardContents={item} />)
                }
            </div>
        </div>
    )
}

export default Consulting