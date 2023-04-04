import React from 'react'
import './NavItem.css'
const NavItem = ({navItem}) => {
  return (
    <>
    {
        navItem.map((item)=> <li key={item.id} className='inline list-none mx-[16px] my-[160px]'><a className='uppercase text-[22px] text-[#D9D9D9] duration-500 hover:text-[#ffffff] tracking-[1.5px] leading-[23px]' href='#'>{item.name}</a></li>)
    }
    </>
  )
}

export default NavItem