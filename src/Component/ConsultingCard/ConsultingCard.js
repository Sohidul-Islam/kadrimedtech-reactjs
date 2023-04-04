import React from 'react'

const ConsultingCard = ({ cardContents }) => {
    return (
        <div className='p-2 mx-[12px] my-[16px] rounded-[16px] border-2 border-[#D9D9D9] min-w-[200px] max-w-[450px]'>
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