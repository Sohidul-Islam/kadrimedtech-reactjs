import React from 'react'
import image1 from '../../Images/map.png'
import './WorldWideClient.css'
function WorldWideClient() {
  return (
    <div  className='mt-[60px] lg:mt-[120px] w-full h-auto xl:w-[1200px] xl:h-[850px] 2xl:w-[1300px] 2xl:h-[1200px] min-[1920px]:w-[1700px]  min-[1920px]:h-[1188px] xl:ml-[110px] 2xl:ml-[220px]'>
        <div id='map-section'>
            <div>
                <div className='w-[90%] md:w-[80%] mx-auto 2xl:mx-0 xl:w-[350px] xl:h-[680px]  2xl:w-[502px] 2xl:h-[741px] xl:ml-[-50px] 2xl:ml-[-110px] bg-[#FFFFFF] shadow-[0_4px_24px_rgba(0,0,0,0.12)]'>
                    <div className='max-w-[250px] md:max-w-[250px] 2xl:max-w-[316px] mx-auto text-center pt-[48px] pb-[16px]'>
                        <h3 className='text-[24px] md:text-[24px] lg:text-[28px] xl:text-[22px] 2xl:text-[40px] leading-[28px] md:leading-[40px]  2xl:leading-[51px] font-[700]'>Our Worldwide Clients</h3>
                    </div>
                    <div className='w-[90%] 2xl:w-[439px] h-[548px] 2xl:h-[548px] mx-auto '>
                        <h3 className='text-[#56B8FC] captalize text-[18px] md:text-[24px] lg:text-[24px] xl:text[-[24px] 2xl:text-[32px] leading-[58px] font-[700]'>Let's Talks</h3>
                        <div className=''>
                            <form className='flex flex-col justify-start gap-[12px]'>
                                <input className='w-full h-[60px] placeholder:text-[14px] 2xl:placeholder:text-[18px] leading-[26px] pl-[24px] border-2 border-[#D9D9D9] rounded-[4px] bg-[#F4F8FB]' placeholder='First Name' required></input>
                                {/* <br></br> */}
                                <input className='w-full h-[60px] placeholder:text-[14px] 2xl:placeholder:text-[18px] leading-[26px] pl-[24px] border-2 border-[#D9D9D9] rounded-[4px] bg-[#F4F8FB]' placeholder='Company'></input>
                                {/* <br></br> */}
                                <input className='w-full h-[60px] placeholder:text-[14px] 2xl:placeholder:text-[18px] leading-[26px] pl-[24px] border-2 border-[#D9D9D9] rounded-[4px] bg-[#F4F8FB]' placeholder='Email'></input>
                                {/* <br></br> */}
                                <textarea className='bg-[#F4F8FB] placeholder:text-[14px] 2xl:placeholder:text-[18px] leading-[26px] pl-[24px] pt-[16px] h-[174px] border-2 border-[#D9D9D9] rounded-[4px]' placeholder='Message' rows="4" cols="50"></textarea>
                                <button className='bg-[#293750] text-[18px] 2xl:text-[24px] font-[500] leading-[32px] tracking-[3px] px-[16px] 2xl:px-[91px] py-[8px] 2xl:py-[18px] text-center w-[150px] md:w-[200px] 2xl:w-[247px] text-[white]' type='submit'>SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <img src={image1}></img>
            </div> */}
        </div>
    </div>
  )
}

export default WorldWideClient