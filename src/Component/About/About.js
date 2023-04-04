import React from 'react'
import image from '../../Images/image-3.png'
import logo from '../../Images/logo-1.png'

const About = () => {
    return (
        <div className='flex items-center mt-[120px] relative top-0 left-0 right-0 -z-50'>
            <div className='w-[1320px] pl-[100px] pt-[180px] pr-[180px] bg-[#181A23] pb-[595px] rounded-r-[24px]'>
                <div>
                    <h3 className='text-[#fff] text-[58px]'>About us</h3>
                </div>
                <div>
                    <p className='text-[#fff] text-[28px] tracking-[.02px]'>
                        At KMT Consulting we set ourselves apart from other consultancies with our combination of broad experience ,deep understanding and strong relations in the MedTech sector, our insight into the MEA region, and knowledge of what it takes to enter and grow a brand in these business landscapes.It is hard to find a single private consultancy offering not just solutions and support for the entire spectrum of services required by the typical Life Science company but also with such a deep understanding of region-specific market entry processes.
                        <br></br>
                        <br></br>
                    </p>
                    <p className='text-[#fff] text-[28px] tracking-[.02px] pr-[120px]'>
                        KMT is a leading provider of outsourced services, business development consulting and regulatory affairs for Swedish / Scandinavian and European Life Science companies growing
                        their presence in the Middle East& Africa.
                        <br></br>
                        <br></br>
                        We have gained a competitive advantage through our
                        ability to consult on the entire spectrum of MedTech
                        products and services in a number of regions.
                    </p>
                </div>

                <div className='absolute w-[362px] h-[362px] right-[500px] top-[835px] z-50'>
                    <img className='w-full' src={logo}></img>
                </div>
                <div className='absolute w-[625px] top-[200px] right-[100px]'>
                    <div>
                        <img className='w-full h-[835px]' src={image} alt='kadriMedTech'></img>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About