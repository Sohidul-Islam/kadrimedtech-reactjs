import React, { useState } from 'react'
import './Navbar.css'
import NavItem from '../NavItem/NavItem'
import logo1 from '../../Images/logo-2.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = ({ navItem }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='absolute top-0 left-0 right-0'>

            <div className='flex justify-between xl:justify-center items-center md:items-center relative top-0 left-0'>
                <div className='inline ml-[16px] 2xl:ml-[155px] 2xl:mr-[80px] w-[60px] min-[1280px]:w-[122px] xl:ml-[50px] min-[1280px]:ml-[50px] mt-[12px] 2xl:mr-[274px] xl:mr-[80px]'>
                    <img className='w-full' src={logo1}></img>
                </div>
                <ul className='hidden xl:inline'>
                    <NavItem navItem={navItem} />
                </ul>

                <div>
                    <button className='sm:visible xl:hidden w-[50px] xl:w-[80px] text-[#fff] mt-[12px] mr-[16px] bg-[#000] rounded-[50%] p-[8px] xl:p-[16px]' onClick={() => setOpen(true)}><Bars3Icon className='' /></button>
                    {open && <div className={`fixed overflow-scroll top-0 left-0 right-0 bottom-0  ${open ? 'w-[100vw] h-[100vh] opacity-100' : 'w-[0vw] h-[0vh] opacity-0'} bg-[#181A23] duration-10000 z-50`}>
                        <button onClick={() => setOpen(false)}><XMarkIcon className='sm:visible xl:hidden w-[60px] text-[#fff] m-[36px]' /></button>
                        <img className='w-[200px] mx-auto mb-[32px]' src={logo1}></img>
                        <ul>
                            {navItem.map((item) => <li key={item.id} className='list-none my-[12px] text-center'><a className='uppercase text-[22px] text-[#D9D9D9] duration-500 hover:text-[#ffffff] tracking-[1.5px] leading-[40px] hover:bg-[#fff] hover:py-2 hover:px-1 rounded-md hover:text-[#000000] hover:font-[600]' href='#'>{item.name}</a></li>)}
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar