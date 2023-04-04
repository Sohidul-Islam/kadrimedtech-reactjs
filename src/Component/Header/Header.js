import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import Details from '../Details/Details'

const Header = () => {

    const navItem = [
        {
            id: 1,
            name: "about us"
        },
        {
            id: 2,
            name: "our focus areas"
        },
        {
            id: 3,
            name: "why work with us"
        },
        {
            id: 4,
            name: "our services"
        },
        {
            id: 5,
            name: "it solutions"
        },
        {
            id: 6,
            name: "news"
        },
        {
            id: 7,
            name: "contact"
        },
    ]
    return (
        <div>
           <div className='relative top-0 left-0 right-0'>
           <Slider navItem={navItem}/>
           </div>
           <br></br>
           <Details/>
        </div>
    )
}

export default Header