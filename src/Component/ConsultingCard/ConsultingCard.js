import React from 'react'

const ConsultingCard = ({ cardContents }) => {

    return (

        <>

            {
                cardContents?.id === 1 && <div className='md:shrink px-[24px] py-[48px] mx-[0px] md:mx-[12px] my-[16px] rounded-[16px] border-2 border-[#D9D9D9] w-full xl:w-[546px] xl:h-[311px]'>
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
            }
            {
                cardContents?.id === 2 && <div className='md:shrink px-[24px] py-[48px] mx-[0px] md:mx-[12px] my-[16px] rounded-[16px] border-2 border-[#D9D9D9] w-full xl:w-[546px] xl:h-[311px]'>
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
            }
            {
                cardContents?.id === 3 && <div className='md:shrink px-[24px] py-[48px] mx-[0px] md:mx-[12px] my-[16px] rounded-[16px] border-2 border-[#D9D9D9] w-full xl:w-[353px] xl:h-[275px]'>
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
            }
            {
                cardContents?.id === 4 && <div className='md:shrink px-[24px] py-[48px] mx-[0px] md:mx-[12px] my-[16px] rounded-[16px] border-2 border-[#D9D9D9] w-full xl:w-[353px] xl:h-[275px]'>
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
            }
            {
                cardContents?.id === 5 && <div className='md:shrink px-[24px] py-[48px] mx-[0px] md:mx-[12px] my-[16px] rounded-[16px] border-2 border-[#D9D9D9] w-full xl:w-[353px] xl:h-[275px]'>
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
            }
            {
                cardContents?.id === 6 && <div className='md:shrink px-[24px] py-[48px] mx-[0px] md:mx-[12px] my-[16px] rounded-[16px] border-2 border-[#D9D9D9] w-full xl:w-[353px] xl:h-[275px]'>
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
            }
            {
                cardContents?.id === 7 && <div className='md:shrink px-[24px] py-[48px] mx-[0px] md:mx-[12px] my-[16px] rounded-[16px] border-2 border-[#D9D9D9] w-full xl:w-[194px] xl:h-[275px]'>
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
            }
        </>
    )
}

export default ConsultingCard