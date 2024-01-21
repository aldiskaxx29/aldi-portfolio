import React from 'react'
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full max-w-[460px] bg-black/20 backdrop-blur-2xl h-[86px] rounded-full px-8 flex flex-row justify-between mx-auto items-center'>
          <Link to='home' offset={-200} className='cursor-pointer' activeClass='active' smooth={true} spy={true}>
            <BiHomeAlt className='text-white size-6'/>
          </Link>
          <Link to='about' className='cursor-pointer' activeClass='active' smooth={true} spy={true}>
            <BiUser className='text-white size-6'/>
          </Link>
          <Link to='services' className='cursor-pointer' activeClass='active' smooth={true} spy={true}>
            <BsClipboardData className='text-white size-6'/>
          </Link>
          <Link to='work' className='cursor-pointer' activeClass='active' smooth={true} spy={true}>
            <BsBriefcase className='text-white size-6'/>
          </Link>
          <Link to='contact' className='cursor-pointer' activeClass='active' smooth={true} spy={true}>
            <BsChatSquare className='text-white size-6'/>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
