import React from 'react'
import '../App.css'
import Contact from './Contact'


const RightSide = () => {

  return (
    <div className='divRight'>
    <p className='textRight'>
      <div className='title'>Front-End Developer</div>
      <div className='name'>Mustafa Polat</div>
      <span className='bold'>I am currently looking for a full-time and part-time position as a junior web developer.</span>
    </p>
    <Contact />
  </div>
  )
}

export default RightSide