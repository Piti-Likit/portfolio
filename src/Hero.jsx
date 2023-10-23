import React from 'react'
import profile_pic from './assets/profile_pic.jpg'
function Hero() {
  return (
    <div id='home'>

<div className="hero min-h-screen bg-base-200 bg-white text-black ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20">
    <img src= {profile_pic} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Hello, I am Piti Likitwattanapaisarn,
a full-stack software developer</h1>
      <p className="py-6 text-3xl">As a career switcher with 17-year experience from education field, I have just graduated from Generation Thailand Junior Software Developer Program.</p>
      <a href='https://docs.google.com/document/d/1CT3wM6FuQ35l0WNsD_swcDtGuT6__CVA/edit'>
      <button className="btn btn-primary text-white bg-gray-500">Download Resume</button>
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero