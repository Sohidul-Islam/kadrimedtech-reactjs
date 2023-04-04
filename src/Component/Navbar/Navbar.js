import React from 'react'
import './Navbar.css'
import NavItem from '../NavItem/NavItem'
import logo1 from '../../Images/logo-2.png'
const Navbar = ({ navItem }) => {
    return (
       <div className='absolute '>
         <div className='flex md:justify-center md:items-center '>
            <div className='inline w-[122px] ml-[155px] mt-[12px] mr-[274px]'>
                <img className='w-full' src={logo1}></img>
            </div>
            <ul className='inline'>
                <NavItem navItem={navItem} />
            </ul>
        </div>
       </div>
    )
}

export default Navbar