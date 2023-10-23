import React from 'react'
// import { BsLinkedin } from "react-icons/bs";

import linkedin from './assets/linkedin.png'
import github  from './assets/github.png'
import email from './assets/email.png'

function Contact() {
  return (
    <div id="contact" className=' p-10 pt-40 pb-40 h-98 w-100 h-80 bg-white'>
    <div className='flex justify-center gap-20'>
      <a href='https://www.linkedin.com/in/piti-likitwattanapaisarn/'>
        <img src={linkedin} alt="" className='w-20 '/>
      </a>
      <a href='https://github.com/Piti-Likit'>
        <img src={github} alt="" className='w-20 ms-11'/>
      </a>
      <div className='gap-6'>
      <a  href=''>
        <img src={email} alt="" className='w-20 ms-14'/>
      </a>
      <div className='text-2xl '>
        Piti.nud@gmail.com
      </div>
        
      </div>
    </div>
    
    </div>
  )
}

export default Contact

 {/* <h1 className='text-center font-bold text-2xl'>Contact</h1>
        <div className='h-[50px] w-[50px] gap-9 flex justify-center w-100 ms-96 '>
          <div>
         <img src= {linkedin} className="max-w-sm rounded-lg shadow-2xl "/>
          </div>
          <div>
         <img src= {github} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div>
         <img src= {email} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
         </div> */}