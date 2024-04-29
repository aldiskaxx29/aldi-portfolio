import React, { useContext } from 'react'
import { Contex } from './context/MyContext'
import user from './assets/aldi.png';
import {ReactTyped}  from 'react-typed';
import { BsGithub, BsWhatsapp, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import next from './assets/logo/next.png';
import jquery from './assets/logo/jquery.png';
import angular from './assets/logo/angular.png';
import html from './assets/logo/html.png';
import css from './assets/logo/css.png';
import vue from './assets/logo/vue.png';
import react from './assets/logo/react.png';
import tailwind from './assets/logo/tailwind.jpg';
import material from './assets/logo/material-ui.png';
import js from './assets/logo/js.png';
import redux from './assets/logo/redux.png';
import botstrap from './assets/logo/botstrap.png';
import laravel from './assets/logo/laravel.png';
import codeigniter from './assets/logo/codeigniter.png';
import golang from './assets/logo/golang-img.png';
import express from './assets/logo/Expressjs.png';
import node from './assets/logo/node.png';
import appache from './assets/logo/apache.jpg';
import nginx from './assets/logo/nginx.jpg';
import php from './assets/logo/php.png';
import json from './assets/logo/json.png';
import mongodb from './assets/logo/mongodb.png'
import mysql from './assets/logo/MYSQL.png';
import postgre from './assets/logo/postgre.png';
import redis from './assets/logo/redis.png';
import sqlite from './assets/logo/sqlite.png';
import siasat from './assets/project/siasat.png';
import seatsatli from './assets/project/seatsatli.png';
import ias from './assets/project/ias.png';
import sushimanna from './assets/project/sushimanna.jpeg';
import Slider from 'react-slick';

const App = () => {
  const {produk, setProduk} = useContext(Contex);
  console.log('pr', produk);

  const handleClick = () => {
    const filter = produk.filter(item => item.id != 1);
    setProduk(filter);
    console.log('klik', produk, filter);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  const handleDownload = () => {
    const downloadCV = document.createElement('a');
    downloadCV.href = 'https://drive.google.com/file/d/1TRLmktheednGJhl_7xER9PyThQsgKdJF/view?usp=drive_link';
    downloadCV.download = 'CV-M-Aldi-Setiawan.pdf';
    document.body.appendChild(downloadCV);
    downloadCV.click();
    document.body.removeChild(downloadCV);
  }


  return (
    <div className='space-y-3 bg-gradient-to-r from-blue-950 to-slate-800'>
      <div className='bg-gradient-to-r from-blue-950 to-slate-800 h-screen'>
        <div className='max-w-7xl mx-auto flex flex-row justify-between p-3 items-center'>
            <div>
              LOGO
            </div>
            <div>
              <ul className='flex gap-6'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PROJECT</li>
                <li>CONTACT ME</li>
              </ul>
            </div>
            <div>
              <a href='https://api.whatsapp.com/send?phone=6287701536399' target='_blank' className='py-2 px-6 font-bold bg-gradient-to-r from-green-700 to-green-600 rounded-full'>CONTAC</a>
            </div>
        </div>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='col-span-1 h-[600px] flex items-center'>
              <div className='p-3 space-y-4'>
                <p className='text-4xl font-bold'>I am <span className='text-gradient from-purple-500 to-blue-600'><ReactTyped
                    strings={['Web Developer', 'Web Application', 'Full Stack Developer']}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
                  /></span></p>
                  
                <p className='text-3xl font-bold'>Muhamad Aldi Setiawan</p>
                <p>Web Developer, Web Application, Full-Stack Web Developer with the ability to learn and collaborate in rapidly changing environments and processes</p>
                <div className='flex gap-4'>
                  <button className='py-2 px-4 rounded-xl bg-gradient-to-r from-blue-800 to-purple-800'>HIRE ME</button>
                  <button onClick={handleDownload} className='py-2 px-4 rounded-xl bg-gradient-to-r from-red-500 to-red-800'>Download CV</button>
                </div>
              </div>
            </div>
            <div className='col-span-1 h-[600px] flex items-center justify-center'>
              <img src={user} className='w-90% rounded-full' alt="user" />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-r from-blue-950 to-slate-800 '>
          <div className='max-w-7xl mx-auto'>
            <div className='pb-3'>
              <h2 className='text-center'>ABOUT ME</h2>
            </div>
            <div className='grid grid-cols-2'>
              <div className='col-span-1 text-center flex flex-col items-center space-y-2'>
                <img src={user} alt="user" className='rounded-3xl w-[50%]' />
                <span>M ALDI SETIAWAN</span>
                <div className='flex gap-5'>
                  <GrMail size={27}/>
                  <BsLinkedin size={25}/>
                  <BsGithub size={25}/>
                  <BsWhatsapp size={25}/>
                </div>
              </div>
              <div className='col-span-1 w-full'>
                <div className='text-wrapper pt-8' style={{ textAlign: 'justify' }}>I am a web developer focused on creating responsive and user-friendly applications. With experience as a Front End and Full Stack Developer, I have succeeded in creating a variety of interesting web applications. My skills include HTML, CSS, JavaScript, as well as frameworks such as React (including Vite and Js) to provide a great user experience. Apart from that, I also have experience in back-end development using Laravel, and Express.js, as well as managing databases such as MySQL and MongoDB. I am always looking for new challenges and opportunities to learn, and I am passionate about honing my skills in this ever-changing technological landscape.</div>
              </div>
            </div>
          </div>
          <div className='max-w-7xl mx-auto space-y-4'>
            <div className='py-3'>
              <h2 className='text-center'>SKILS ME</h2>
            </div>
            <div className=''>
              <p>FRONT END</p>
              <div className='grid grid-cols-6 gap-3'>
                <img src={next} className='w-20 h-20 rounded-full object-fit' alt="" />
                <img src={angular} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={html} className='w-20 h-20  rounded-full object-fit'  alt="" />
                <img src={css} className='w-20 h-20  rounded-full object-fit'  alt="" />
                <img src={vue} className='w-20 h-20  rounded-full object-fit'  alt="" />
                <img src={react} className='w-20 h-20  rounded-full object-fit'  alt="" />
                <img src={tailwind} className='w-20 h-20  rounded-full object-fit'  alt="" />
                <img src={material} className='w-20 h-20  rounded-full object-fit'  alt="" />
                <img src={js} className='w-20 h-20  rounded-full object-fit'  alt="" />
                <img src={botstrap} className='w-20 h-20  rounded-full object-fit'  alt="" />
                <img src={redux} className='w-20 h-20  rounded-full object-fit'  alt="" />
                <img src={jquery} className='w-20 h-20  rounded-full object-fit'  alt="" />
              </div>
            </div>
            <div>
              <p>BACK END</p>
              <div className='grid grid-cols-6 gap-3'>
                <img src={php} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={laravel} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={codeigniter} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={golang} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={express} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={node} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={appache} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={nginx} className='w-20 h-20  rounded-full object-fit' alt="" />
              </div>
            </div>
            <div>
              <p>DATABASE</p>
              <div className='grid grid-cols-6 gap-3'>
                <img src={json} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={mongodb} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={mysql} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={postgre} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={redis} className='w-20 h-20  rounded-full object-fit' alt="" />
                <img src={sqlite} className='w-20 h-20  rounded-full object-fit' alt="" />
              </div>
            </div>
          </div>
      </div>
      <div className='bg-gradient-to-r from-blue-950 to-slate-800 h-screen pt-16'>
          <div className='max-w-7xl mx-auto'>
            <div className='py-3'>
              <h2 className='text-center'>PROJECT</h2>
            </div>
            <div className='grid grid-cols-4'>
              <div className="col-span-4">
                <div className="slider-container">
                <Slider {...settings}>
                  <div className='col-span-1 h-[400px] rounded-lg px-2'>
                    <img src={siasat} alt="" className='rounded-t-lg h-[195px] object-cover' />
                    <div className='p-3 bg-slate-100 rounded-b-xl'>
                      <p className='text-black font-bold'>Aplikasi system SATS-LN</p>
                      <small className='text-black'>Aplikasi perijinan impor exspor hewan</small>
                      <div className='space-x-2 pt-3 border-t'>
                        <small className='py-1 px-3 bg-red-300 rounded-full'>Laravel</small>
                        <small className='py-1 px-3 bg-purple-700 rounded-full'>Bootstrap</small> 
                        <small className='py-1 px-3 bg-slate-400 rounded-full'>Jquery</small> 
                      </div>
                      <a className='bg-blue-400 py-1 px-3 rounded-lg text-sm' href="https://siasat.ksdae.menlhk.go.id/login" target='_blank'>Visit Website</a>
                    </div>
                  </div>
                  <div className='col-span-1 h-[400px] rounded-lg px-2'>
                    <img src={seatsatli} alt="" className='rounded-t-lg h-[195px] object-cover' />
                    <div className='p-3 bg-slate-100 rounded-b-xl'>
                      <p className='text-black font-bold'>Aplikasi system SEATSATLI</p>
                      <small className='text-black'>Aplikasi pendataan hewan dan di peruntukan untuk dokter hewan</small>
                      <div className='space-x-2 pt-3 border-t'>
                        <small className='py-1 px-3 bg-red-300 rounded-full'>Laravel</small>
                        <small className='py-1 px-3 bg-blue-600 rounded-full'>React Js</small> 
                        <small className='py-1 px-3 bg-red-500 rounded-full'>Redis</small> 
                        <small className='py-1 px-3 bg-slate-400 rounded-full'>Mysql</small> 
                      </div>
                      <a className='bg-blue-400 py-1 px-3 rounded-lg text-sm' href="https://sehatsatlitraining.menlhk.go.id/app/signin" target='_blank'>Visit Website</a>
                    </div>
                  </div>
                  <div className='col-span-1 h-[400px] rounded-lg px-2'>
                    <img src={ias} alt="" className='rounded-t-lg h-[195px] object-cover' />
                    <div className='p-3 bg-slate-100 rounded-b-xl'>
                      <p className='text-black font-bold'>Aplikasi system IAS</p>
                      <small className='text-black'>Aplikasi pendataan hewan Invasive Alien Species baik dalam maupun luar negri</small>
                      <div className='space-x-2 pt-3 border-t'>
                        <small className='py-1 px-3 bg-red-300 rounded-full'>Laravel</small>
                        <small className='py-1 px-3 bg-blue-600 rounded-full'>React Js</small> 
                        <small className='py-1 px-3 bg-red-500 rounded-full'>Redis</small> 
                        <small className='py-1 px-3 bg-slate-400 rounded-full'>Mysql</small> 
                      </div>
                      <a className='bg-blue-400 py-1 px-3 rounded-lg text-sm' href="https://iasindonesia.menlhk.go.id/app" target='_blank'>Visit Website</a>
                    </div>
                  </div>
                  <div className='col-span-1 h-[400px] rounded-lg px-2'>
                    <img src={sushimanna} alt="" className='rounded-t-lg h-[195px] object-cover' />
                    <div className='p-3 bg-slate-100 rounded-b-xl'>
                      <p className='text-black font-bold'>Aplikasi system Admin SUSHIMANNA</p>
                      <small className='text-black'>Aplikasi sebagai pengelola website susimanna</small>
                      <div className='space-x-2 pt-3 border-t'>
                        <small className='py-1 px-3 bg-red-300 rounded-full'>Laravel</small>
                        <small className='py-1 px-3 bg-purple-700 rounded-full'>Bootstrap</small> 
                      </div>
                      <a className='bg-blue-400 py-1 px-3 rounded-lg text-sm' href="https://www.sushimanna.id/admin" target='_blank'>Visit Website</a>
                    </div>
                  </div>
                </Slider>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='bg-gradient-to-r from-blue-950 to-slate-800 h-screen'>
          <div className='max-w-7xl mx-auto pb-5'>
            <div>
              <h2 className='text-center'>CONTACT ME</h2>
            </div>
            <div className='border rounded-md p-4 max-w-2xl mx-auto space-y-2'>
              <form action="">
                <div className='grid grid-cols-2 gap-3 '>
                  <div className='flex flex-col'>
                    <label htmlFor="">Name</label>
                    <input type="text" className='w-full rounded-md outline-none border px-2 py-1 bg-transparent text-white' placeholder='Enter your name' required />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="">Email</label>
                    <input type="email" className='w-full rounded-md outline-none border px-2 py-1 bg-transparent text-white' placeholder='Enter your email' required />
                  </div>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                  <div className='flex flex-col'>
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10" className='bg-transparent border w-full rounded-md outline-none text-white px-2 py-1' placeholder='Enter your message' required></textarea>
                  </div>
                  <button type='submit' className='w-20 border px-3 py-1 rounded-xl font-normal text-white'>SUBMIT</button>
                </div>
              </form>
            </div>
          </div>

          <div className='border-t max-w-6xl mx-auto flex justify-between'>
            <div className='pt-3'>
              LOGO
            </div>
            <div className='pt-3'>
              <ul className='flex gap-4'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PROJECT</li>
                <li>CONTACT ME</li>
              </ul>
            </div>
            <div className='pt-3'>
              TANERANG INDONESIA
            </div>
          </div>

          <div className='max-w-6xl mx-auto pt-8 text-center space-y-2'>
            <p>FOLLOW US</p>
            <div className='flex gap-4 items-center justify-center'>
              <BsGithub size={20}/>
              <BsWhatsapp size={20}/> 
              <BsLinkedin size={20}/>
              <BsInstagram size={20}/>
              <BsFacebook size={20}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
