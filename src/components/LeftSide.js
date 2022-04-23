import React from 'react'
import imageSrc from '../public/mustafa-polat.jfif'
import {BsFileEarmarkPdfFill, BsInstagram, BsGithub, BsMedium } from 'react-icons/bs'


const LeftSide = () => {
  return (
    <div className='divLeft'>
    <img alt="Mustafa Polat" src={imageSrc} id="personal" className='images' />
    <div className='texts'>
      You can reach me
    </div>
    <div className='icon' >
      <div className='icons'>
        <a className='icon1' href="https://www.instagram.com/polatmustafa_" rel="noopener noreferrer" target="_blank"><BsInstagram /></a>
      </div>
      <div className='icons'>
        <a className='icon1' href="https://www.github.com/polat-mustafa" rel="noopener noreferrer" target="_blank"><BsGithub /></a>
      </div>
      <div>
        <a className='icon1' href="https://www.medium.com/@polat-mustafa" rel="noopener noreferrer" target="_blank"> <BsMedium /></a>
      </div>
    </div>
    <div className='download'>
      <a className='pdf' href={require("../public/Mustafa_Polat.pdf")} download="Mustafa Polat CV"><BsFileEarmarkPdfFill /> Download CV</a>
    </div>
  </div>
  )
}

export default LeftSide