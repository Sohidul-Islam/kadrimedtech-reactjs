import React from 'react'
import image from '../../Images/image-3.png'
import logo from '../../Images/logo-1.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {
    return (
        <div className="aspect-[16/9] bg-[red]">
            <div className='flex flex-col lg:flex-row  items-center mt-[60px] lg:mt-[120px] z-50 '>
                <div className='w-full relative top-0 left-0 bottom-0 right-0 bg-[#01112D] min-[1920px]:max-w-[1320px] min-[1920px]:py-[100px] min-[1920px]:pl-[109px] min-[1920px]:pr-[317px] md:rounded-r-[24px] text-left'>
                    <div>
                        <div className='mb-[25px]'>
                            <h3 className='text-[#fff] font-[700] min-[1920px]:text-[96px] min-[1920px]:leading-[58px] min-[1920px]:tracking-[0.6px]'>About us</h3>
                        </div>
                        <div>
                            <p className='text-[#fff] min-[1920px]:text-[24px] min-[1920px]:leading-[36px] min-[1920px]:tracking-[0.6px] font-[400] min-[1920px]:mb-[25px]'>
                                At KMT Consulting we set ourselves apart from other consultancies with our combination of broad experience ,deep understanding and strong relations in the MedTech sector, our insight into the MEA region, and knowledge of what it takes to enter and grow a brand in these business landscapes.It is hard to find a single private consultancy offering not just solutions and support for the entire spectrum of services required by the typical Life Science company but also with such a deep understanding of region-specific market entry processes.
                            </p>
                            <p className='text-[#fff] min-[1920px]:text-[24px] min-[1920px]:leading-[36px] min-[1920px]:tracking-[0.6px] font-[400] min-[1920px]:mb-[25px]'>
                                KMT is a leading provider of outsourced services, business development consulting and regulatory affairs for Swedish / Scandinavian and European Life Science companies growing
                                their presence in the Middle East& Africa.
                            </p>
                            <p className="text-[#fff] min-[1920px]:text-[24px] min-[1920px]:leading-[36px] min-[1920px]:tracking-[0.6px] font-[400]">
                                We have gained a competitive advantage through our
                                ability to consult on the entire spectrum of MedTech
                                products and <br></br> services in a number of regions.
                            </p>
                        </div>

                        {/* <div className="absolute top-[96%] left-0 right-0">
                            <div className='relative top-0 left-0'>
                                <div className='min-[1920px]:w-[625px] absolute left-[130px] bottom-[16px]'>
                                    <AnimationOnScroll animateOnce={true} animateIn="animate__backInRight">
                                        <img className='w-full' src={image} alt='kadriMedTech'></img>
                                    </AnimationOnScroll>
                                </div>
                                <div className='min-[1920px]:w-[362px] absolute left-0 bottom-0'>
                                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" delay={700}>
                                        <img className='w-full' alt='kadriMedTechLogo' src={logo}></img>
                                    </AnimationOnScroll>
                                </div>
                            </div>
                        </div> */}

                        <div className='min-[1920px]:w-[625px] absolute right-[-545px] bottom-[80px]'>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__backInRight">
                                <img className='w-full' src={image} alt='kadriMedTech'></img>
                            </AnimationOnScroll>
                        </div>

                        <div className='min-[1920px]:w-[362px] absolute right-[-97px] bottom-[64px]'>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" delay={700}>
                                <img className='w-full' alt='kadriMedTechLogo' src={logo}></img>
                            </AnimationOnScroll>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default About