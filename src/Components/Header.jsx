import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoTvOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";



const Header=()=>{
    const [toggle,setToggle]= useState(false)
    const showSideMenu=()=>{
        setToggle(true);
        console.info("hello")
    }
    const hideSideMenu=()=>{
        setToggle(false);
    }
    const Links=[
        {
            icon: <IoTvOutline/>,
            name: 'Swiggy Corporate'
        },
        {
            icon: <FiSearch/>,
            name: 'Search'
        },
        {
            icon: <RiDiscountPercentLine/>,
            name: 'Offers',
            sup: 'New'
        },
        {
            icon: <IoHelpBuoyOutline/>,
            name: 'Help'
        },
        {
            icon: <FaRegUser/>,
            name: 'Sign-in'
        },
        {
            icon: <AiOutlineShoppingCart/>,
            name: 'Cart'
        }
    ]
return (
    <>
    <div className='black-overlay w-screen h-screen fixed duration-500 '  onClick={hideSideMenu} style={{
        // opacity: toggle? 1:0,
        visibility: toggle? "visible": "hidden",
        zIndex:999999
        // transitionduration: toggle?'500ms':'200ms'
        }}>
        
        <div className='w-[450px] bg-white h-full absolute duration-500 z-[99]  ' onClick={(e)=>{e.stopPropagation();}} style={{
            left: toggle?'0%':'-100%',}}>
              <div className='w-[90%] flex h-[50px] mx-auto mt-[20px]'><MdClose className='text-2xl cursor-pointer' onClick={(hideSideMenu)} style={{left: toggle?'0%':'-100%'}}/> </div>
              <div className='w-[80%] mx-auto mt-[20px]'><input placeholder='Search for area, street name border' className='border w-[100%] h-[50px] border-[#a9abb2] p-5 active:shadow-lg active:border-none'></input></div>
              <div className='w-[80%] mx-auto mt-[30px] border-[#a9abb2] border h-[85px] cursor-pointer '>
                <div className='h-[100%] p-[20px] w-[250px] ' style={{fontFamily:"poppins"}}>
                    <div className='flex items-center justify-center'><div className='pr-1'><TbCurrentLocation/></div>
                <div className='hover:text-orange-500 text-[14px] font-[500]'>Get current location</div></div>
                <div className='ml-[45px] text-[13px]'>Using GPS</div>
              </div></div>
            </div>

    </div>
    
        <header className='p-3 shadow-xl w-full sticky top-0 z-[999] bg-white' style={{fontFamily:"Poppins"}}>
            <div className='w-[1200px]  mx-auto flex'>
            <div className='w-[100px]'>
                <img className='w-full hover:scale-107 duration-100 cursor-pointer' src="Images/Swiggy-logo.png"></img>
            </div>
            <div className='flex items-center justify-center text-[12px] cursor-pointer' onClick={showSideMenu}>
                <span className='text-orange-500 mr-[10px]'><u className='font-bold'>Khyora </u></span><span className='text-[#686b78]'>Awadhpuri,Kanpur, Uttar Pradesh, India</span><RxCaretDown className='font-bold inline text-[orange] cursor-pointer text-[30px]' />
            </div>
            <nav className='list-none flex gap-7 ml-auto font-semibold text-[18px]' >
                
                {
                    Links.map((item,index)=>{
                    return <li key={index} className='flex items-center gap-2 hover:text-[#ff5200] cursor-pointer font-[500] text-[15px] text-[#3d4152]'>{item.icon} {item.name} <sup className='text-orange-400'>{item.sup}</sup></li>
                })
                }
                

            </nav>
            </div>

        </header>
        </>
);
}

export default Header;