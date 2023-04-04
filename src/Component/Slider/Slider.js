import React from 'react'
import s1 from '../../Images/bg-1.png'
import './Slider.css'
import Navbar from '../Navbar/Navbar'
const Slider = ({navItem}) => {

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
            <Navbar navItem={navItem}/>
            <div className='w-full h-[100%]'>
                {
                    sliderImages.map((image) => {
                        return <div>
                            <div>
                                <img className='w-full' key={image.id} src={image.path}></img>
                            </div>
                            <div className='absolute bottom-[40px] max-w-[1050px] left-[108px]'>
                                <div className='flex justify-center items-center'>
                                    <div className='w-[24px] rounded-[110px] h-[570px] bg-[#D9D9D93D]/25 mr-[68px]'>
                                        <div className='w-full h-[33%] bg-[#ffff] rounded-md'>
                                        </div>
                                    </div>
                                    <div className=' pr-4 py-4'>
                                        <div className='text-[#fff]'>
                                            <h3 className='text-[92px]'>Kadri<span className='text-[#B2BBDB]'>Med</span><span className='text-[#E9D3A1]'>Tech</span></h3>
                                        </div>
                                        <p className='text-[32px] text-[#fff]'>{image.desc}</p>
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