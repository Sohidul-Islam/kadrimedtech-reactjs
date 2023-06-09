import React, { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const WhyWorkWithUs = () => {

    const newText = [
        {
            id: 1,
            text: "We understand that all companies operate in different business conditions and that the strategy, resources, and brand position all impact the new market entry process. We invest a lot of time in listening to your unique needs so we can better understand your company and pain points, and then together we build the best strategy to give you an immediate competitive edge when entering the new market. Regardless of how complex or simple your needs are, KMT approaches each project with a high level of personalization and attention to detail."
        },
        {
            id: 2,
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
        },
        {
            id: 3,
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
        },
    ]

    const [textItem, setTextItem] = useState(newText[0].text)
    const [isActive, setIsActive] = useState([1, 0, 0])
    console.log(isActive[0]);
    return (
        <div className='bg-[#F2F2F2] w-full mt-[60px] h-auto flex flex-col lg:flex-row items-center lg:mt-[120px]'>
            <div className='h-full w-[100%] lg:w-[40%] bg-[#181A23] inline-block'>
                <div className="px-[50px] py-[100px] md:px-[32px] md:py-[100px]  xl:px-[100px] xl:py-[40px] 2xl:px-[40px] 2xl:py-[100px] min-[1920px]:px-[100px] min-[1920px]:py-[100px]">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__backInRight">
                        <h3 className='text-[#56B8FC] font-[700] text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[40px] min-[1920px]:text-[54px] mb-[24px]  2xl:mb-[48px]'>Why work with us?</h3>
                    </AnimationOnScroll>
                    <button onClick={() => {
                        setTextItem(newText[0].text)
                        let newisActive = isActive;
                        newisActive = [1, 0, 0];
                        setIsActive(newisActive)
                    }} className={` ${isActive[0] === 1 ? 'text-[#D9D9D9] border-b-4 font-[600] border-[#d9d9d9]' : 'text-[#fff] border-0'} text-[12px] md:text-[18px] lg:text-[16px]  font-[400] 2xl:text-[24px] min-[1920px]:text-[28px] mb-[24px]  2xl:mb-[48px]`}>understanding the client's Needs</button>
                    <br></br>
                    <button onClick={() => {
                        setTextItem(newText[1].text)
                        let newisActive = isActive;
                        newisActive = [0, 1, 0];
                        setIsActive(newisActive)
                    }} className={` ${isActive[1] === 1 ? 'text-[#D9D9D9] border-b-4 font-[600] border-[#d9d9d9]' : 'text-[#fff] border-0'} text-[12px] md:text-[18px] lg:text-[16px]  font-[400] 2xl:text-[24px] min-[1920px]:text-[28px] mb-[24px]  2xl:mb-[48px]`}>Culturally appropriate communication</button>
                    <br></br>
                    <button onClick={() => {
                        setTextItem(newText[2].text)
                        let newisActive = isActive;
                        newisActive = [0, 0, 1];
                        setIsActive(newisActive)
                    }} className={` ${isActive[2] === 1 ? 'text-[#D9D9D9] border-b-4 font-[600] border-[#d9d9d9]' : 'text-[#fff] border-0'} text-[12px] md:text-[18px] lg:text-[16px] font-[400]  2xl:text-[24px] min-[1920px]:text-[28px] mb-[24px]  2xl:mb-[48px]`}>Experienced professionals</button>
                </div>
            </div>
            <div className=' h-full w-[100%] lg:w-[60%] bg-[#F2F2F2] inline-block'>
                <div className='px-[50px] py-[100px] md:px-[32px] md:py-[100px]  xl:px-[100px] xl:py-[40px] 2xl:px-[100px] 2xl:py-[100px]'>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__backInRight" delay={500}>  <p className=' text-[12px] md:text-[18px] lg:text-[16px] 2xl:text-[24px]'> {textItem}</p></AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

export default WhyWorkWithUs