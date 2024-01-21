import React from 'react'
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-row justify-between items-center'>
          <a href="">
            <img src={Logo} alt="" />
          </a>

          <button className='btn btn-sm'>LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Header
