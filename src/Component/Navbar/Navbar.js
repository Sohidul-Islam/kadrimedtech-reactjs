import React, { useState } from 'react'
import './Navbar.css'
import NavItem from '../NavItem/NavItem'
import logo1 from '../../Images/logo-2.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = ({ navItem }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='absolute'>

            <div className='flex max-w-[1920px] md:justify-center md:items-center relative top-0 left-0'>
                <div className='inline 2xl:ml-[155px] 2xl:mr-[80px] max-[1280px]:w-[122px] xl:ml-[50px] max-[1280px]:ml-[155px] mt-[12px] mr-[274px] xl:mr-[80px]'>
                    <img className='w-full' src={logo1}></img>
                </div>
                <ul className='hidden xl:inline'>
                    <NavItem navItem={navItem} />
                </ul>


                <div>
                    {/* <button><Bars3Icon className='sm:visible xl:hidden w-[60px] text-[#fff] ' /></button> */}
                    <button onClick={()=>setOpen(true)}><Bars3Icon className='sm:visible xl:hidden w-[60px] text-[#fff] absolute right-[-100%] top-[0px]'/></button>
                    {open && <div className={`fixed top-0 left-0 right-0 bottom-0  ${open ?'w-[100vw] h-[100vh] opacity-100' : 'w-[0vw] h-[0vh] opacity-0'} bg-[#181A23] duration-10000 z-50`}>
                        <button onClick={()=>setOpen(false)}><XMarkIcon className='sm:visible xl:hidden w-[60px] text-[#fff] m-[36px]' /></button>
                        <img className='w-[200px] mx-auto mb-[32px]' src={logo1}></img>
                        <ul>
                            {navItem.map((item) => <li key={item.id} className='list-none my-[12px] text-center'><a className='uppercase text-[22px] text-[#D9D9D9] duration-500 hover:text-[#ffffff] tracking-[1.5px] leading-[23px]' href='#'>{item.name}</a></li>)}
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar