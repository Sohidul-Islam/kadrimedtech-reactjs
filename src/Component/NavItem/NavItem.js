import React from "react";
import "./NavItem.css";
const NavItem = ({ navItem }) => {
  return (
    <>
      {navItem.map((item) => (
        <li
          key={item.id}
          className="inline list-none min-[1861px]:mx-[16px] min-[1629px]:mx-[12px] xl:mx-[8px] text-[0px]"
        >
          <a title={item.name}
            className="uppercase text-center inline-block min-[1861px]:text-[22px] min-[1629px]:text-[18px] xl:text-[18px] pb-[8px] text-[#D9D9D9] transition-all duration-500 ease-in-out hover:text-[#0263C9] tracking-[1.5px] hover:font-[600] font-[300] leading-[23px] before:block before:content-[attr(title)] before:font-[600] before:h-0 before:overflow-hidden before:invisible
            after:block after:content-[''] after:border-b-2 after:border-[#0263C9] after:scale-x-[100%] after:opacity-0 after:transition-scale after:duration-500 after:ease-in-out hover:after:opacity-100
            "
            href="#"
          >
            {item.name}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavItem;
