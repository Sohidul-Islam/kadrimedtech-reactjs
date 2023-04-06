import React, { useState } from 'react'

const WhyWorkWithUs = () => {

    const newText = [
        {
            id:1,
            text:"We understand that all companies operate in different business conditions and that the strategy, resources, and brand position all impact the new market entry process. We invest a lot of time in listening to your unique needs so we can better understand your company and pain points, and then together we build the best strategy to give you an immediate competitive edge when entering the new market. Regardless of how complex or simple your needs are, KMT approaches each project with a high level of personalization and attention to detail."
        },
        {
            id:2,
            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
        },
        {
            id:3,
            text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
        },
    ]

    const [textItem, setTextItem] = useState(newText[0].text)
    const [isActive, setIsActive] = useState([1,0,0])
    console.log(isActive[0]);
    return (
        <div className='bg-[#F2F2F2] w-full mt-[60px] lg:mt-[120px]'>
            <div className='h-full w-[100%] lg:w-[40%] bg-[#181A23] inline-block'>
                {/* <div className='h-full w-[40%] bg-[#181A23] inline-block'> */}
                <div className="p-[100px]">
                    <h3 className='text-[#56B8FC] text-[32px] font-[700] 2xl:text-[58px] mb-[24px] 2xl:mb-[48px]'>Why work with us?</h3>
                    <button onClick={()=>{
                        setTextItem(newText[0].text)
                        let newisActive = isActive;
                        newisActive=[1,0,0];
                        setIsActive(newisActive)
                    }} className={` ${isActive[0]===1 ? 'text-[#D9D9D9] border-b-4 font-[600] border-[#d9d9d9]':'text-[#fff] border-0' } text-[18px]  font-[400] 2xl:text-[28px] mb-[24px] 2xl:mb-[48px]`}>understanding the client's Needs</button>
                    <br></br>
                    <button onClick={()=>{
                        setTextItem(newText[1].text)
                        let newisActive = isActive;
                        newisActive=[0,1,0];
                        setIsActive(newisActive)
                    }} className={` ${isActive[1]===1 ? 'text-[#D9D9D9] border-b-4 font-[600] border-[#d9d9d9]':'text-[#fff] border-0' } text-[18px]  font-[400] 2xl:text-[28px] mb-[24px] 2xl:mb-[48px]`}>Culturally appropriate communication</button>
                    <br></br>
                    <button onClick={()=>{
                        setTextItem(newText[2].text)
                        let newisActive = isActive;
                        newisActive=[0,0,1];
                        setIsActive(newisActive)
                    }} className={` ${isActive[2]===1 ? 'text-[#D9D9D9] border-b-4 font-[600] border-[#d9d9d9]':'text-[#fff] border-0' } text-[18px] font-[400]  2xl:text-[28px] mb-[24px] 2xl:mb-[48px]`}>Experienced professionals</button>
                </div> font-[400]
            </div>
            <div className=' h-full w-[100%] lg:w-[60%] bg-[#F2F2F2] inline-block'>
                {/* <div className='h-full w-[60%] bg-[#F2F2F2] inline-block'> */}
                <div className='p-[100px]'>
                    <p className=' text-[18px] 2xl:text-[24px]'> {textItem}</p>
                </div>
            </div>
        </div>
    )
}

export default WhyWorkWithUs