import React from 'react'
import s1 from '../../Images/bg-1.png'
import './Slider.css'
import Navbar from '../Navbar/Navbar'
const Slider = ({ navItem }) => {

    const sliderImages = [
        {
            id: 1,
            path: s1,
            desc: "KadriMedTech Consulting offers specialist B2B consulting services and networking opportunities for Life Science and healthcare companies seeking to enter the Middle East & Africa regions"
        }
    ]
    return (
        <div className='relative top-0 left-0 w-full h-'>

            <div className=' top-0 left-0 right-0 -z-10'>
                <Navbar navItem={navItem} />
                <div className='w-[100vw] h-[100%]'>
                    {
                        sliderImages.map((image) => {
                            return <div>
                                <div>
                                    <img className='w-[100vw]' key={image.id} src={image.path}></img>
                                </div>
                                <div className='absolute bottom-[20px] md:bottom-[40px] lg:bottom-[100px] xl:max-w-[1000px] 2xl:max-w-[1115px] left-[40px] md:left-[108px]'>
                                    <div className='flex justify-center items-center'>
                                        <div className='w-[8px] xl:w-[16px] 2xl:w-[24px] rounded-[110px] h-[100px] lg:h-[150px] xl:h-[350px] 2xl:h-[570px] bg-[#D9D9D93D]/25 mr-[16px] lg:mr-[32px] xl:mr-[50px] 2xl:mr-[68px]'>
                                            <div className='w-full h-[33%] bg-[#ffff] rounded-md'>
                                            </div>
                                        </div>
                                        <div className=' pr-4 py-4 md:max-w-[600px] xl:max-w-[950px] 2xl:max-w-[1050px]'>
                                            <div className='text-[#fff]'>
                                                <h3 className='text-[12px] sm:text-[24px] md-text-[32px] lg:text-[40px] xl:text-[60px] 2xl:text-[92px]'>Kadri<span className='text-[#B2BBDB]'>Med</span><span className='text-[#E9D3A1]'>Tech</span></h3>
                                            </div>
                                            <p className='text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] text-[#fff]'>{image.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Slider