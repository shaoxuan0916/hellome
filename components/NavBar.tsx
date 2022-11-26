import React, { useState } from 'react'
import Image from "next/image"
import logo from "../public/logo-green.png"
import {GiHamburgerMenu} from 'react-icons/gi'
import { useRouter } from 'next/router'


const NavBar = () => {
    let router= useRouter()
    const [showMenu, setShowMenu] = useState(false)
  return (
    <>
        <div className='h-[65px] bg-secondary'>
            <div className='flex items-center justify-between px-2 pt-3 pb-1'>
                <Image src={logo} alt="logo" height={40} />
                <div className='text-primary' onClick={()=>setShowMenu(!showMenu)}>
                    <GiHamburgerMenu size={40}/>
                </div>
            </div>
        </div>

        {showMenu &&
            <div className='bg-secondary pb-4' >
            <div>
                <div className='py-4 text-center cursor-pointer' onClick={()=>{router.push(`/login`)}}>
                    Home
                </div>
                <div className='py-4 text-center cursor-pointer' onClick={()=>{router.push(`/profile`)}}>
                    Profile
                </div>
                <div className='py-4 text-center cursor-pointer'>
                    Log Out
                </div>
            </div>
        </div>}
    </>
  )
}

export default NavBar