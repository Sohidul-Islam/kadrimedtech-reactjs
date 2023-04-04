import React from 'react'
import image1 from '../../Images/image-1.png'

const Details = () => {
  return (
   <div className='flex justify-center items-center mt-[120px]'>
    <div className='w[30%]'>
            <img className='w-[600px] ml-[200px]' src={image1} alt="kadriMedTech"></img>
    </div>
    <div className='w-[70%] bg-[#CDCDCD] rounded-l-[25px] py-[100px] pl-[150px] pr-[60px] -z-50'>
   <div>
    <p className='inline-block text-[32px]'>
    From preliminary market research and competitor assessments through to developing a full market entry strategy with ongoing support in the region, KadriMedTech is the only strategic business partner you will need for your MedTech company’s market entry and expansion in these dynamic regions of the world. 
    <br></br>
    <br></br>
    Our competitive advantage lies in our ability to consult on the full spectrum of Life Science products and services, including medtech, laboratory devices, E-health solutions, food supplements and cosmetics products etc. By collaborating with KadriMedTech Consulting, clients have a far quicker and smoother route to market entry, benefiting from our vast insight into today’s Life Science sector, our deep understanding of the business environment and our extensive network.
    </p>
   </div>
    </div>
   </div>
  )
}

export default Details