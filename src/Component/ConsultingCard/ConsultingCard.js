import React from 'react'

const ConsultingCard = ({ cardContents }) => {
    
    return (
        <div className='px-[24px] py-[48px] mx-[12px] my-[16px] rounded-[16px] border-2 border-[#D9D9D9] min-w-[194px] max-w-[546px]'>
            <div>
                <div>
                    <div className='bg-[#FFF4DB] inline-block p-6 rounded-[50%]'>
                        <img src={cardContents.icon}></img>
                    </div>
                    <div>
                        <p className='text-[24px]'>{
                            cardContents.desc
                        }</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ConsultingCard