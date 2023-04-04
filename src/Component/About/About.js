import React from 'react'
import image from '../../Images/image-3.png'
import logo from '../../Images/logo-1.png'

const About = () => {
    return (
        <div className='flex items-center mt-[120px] relative top-0 left-0 right-0 -z-50'>
            <div className='w-full bg-[#181A23] text-center px-[64px] pt-[120px] pb-[200px] lg:w-[68%] lg:pl-[5%] lg:pt-[9%] lg:pr-[12%] lg:pb-[31%] lg:rounded-r-[24px] lg:text-left '>
                <div>
                    <h3 className='text-[#fff] text-[58px]'>About us</h3>
                </div>
                <div>
                    <p className='text-[#fff] text-[28px] tracking-[.02px]'>
                        At KMT Consulting we set ourselves apart from other consultancies with our combination of broad experience ,deep understanding and strong relations in the MedTech sector, our insight into the MEA region, and knowledge of what it takes to enter and grow a brand in these business landscapes.It is hard to find a single private consultancy offering not just solutions and support for the entire spectrum of services required by the typical Life Science company but also with such a deep understanding of region-specific market entry processes.
                        <br></br>
                        <br></br>
                    </p>
                    <p className='text-[#fff] text-[28px] tracking-[.02px] xl:pr-[6%]'>
                        KMT is a leading provider of outsourced services, business development consulting and regulatory affairs for Swedish / Scandinavian and European Life Science companies growing
                        their presence in the Middle East& Africa.
                        <br></br>
                        <br></br>
                        We have gained a competitive advantage through our
                        ability to consult on the entire spectrum of MedTech
                        products and services in a number of regions.
                    </p>
                </div>

                <div className='absolute top-[-50px] left-[40%] right-[40%] w-[20%] h-[20%] xl:right-[26%] xl:top-[40%] xl:left-[55%]  z-50'>
                    <img className='w-full' src={logo}></img>
                </div>
                {/* <div className='absolute w-[32%] top-[10%] right-[10%]'> */}
                <div className='w-full mt-[64px] xl:absolute xl:w-[32%] xl:top-[10%] xl:right-[10%]'>
                    <div>
                        <img className='w-full h-[43%]' src={image} alt='kadriMedTech'></img>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About