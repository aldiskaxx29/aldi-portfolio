import React from 'react'
import Image from '../assets/avatar.svg'
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {


  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div>
          <div>
            <h1>ALDI <span>SKAX</span></h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mt-4'>I am a </span>
              <TypeAnimation sequence={[
                'Web Developer',
                2000,
                'FullStack Developer',
                2000,
                'Backend Developer',
                2000
              ]}
              speed={50}
              wrapper='span'
              className='text-accent'
              repeat={Infinity}
              />
            </div>
            <div className=''>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime consequatur aliquid id itaque incidunt perspiciatis, aperiam similique laboriosam recusandae quos tempora omnis libero necessitatibus eaque voluptatem dolores suscipit distinctio vel?</p>
              <div className='space-x-2'>
                <button className='btn btn-lg'>Contact Us</button>
                <a href="">My Portfolio</a>
              </div>
            </div>
          </div>
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
