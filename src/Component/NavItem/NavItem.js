import React from 'react'
import './NavItem.css'
const NavItem = ({navItem}) => {
  return (
    <>
    {
        navItem.map((item)=> <li key={item.id} className='inline list-none min-[1861px]:mx-[16px] min-[1629px]:mx-[12px] xl:mx-[8px]'><a className='uppercase min-[1861px]:text-[22px] min-[1629px]:text-[18px] xl:text-[18px] text-[#D9D9D9] duration-500 hover:text-[#ffffff] tracking-[1.5px] leading-[23px]' href='#'>{item.name}</a></li>)
    }
    </>
  )
}

export default NavItem