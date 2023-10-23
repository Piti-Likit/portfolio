import React from 'react'
import html from './assets/html.png'
import css from './assets/css.png'
import bootstrap from './assets/bootstrap.png'
import tailwindcss from './assets/tailwindcss.png'
import javascript from './assets/javascript.png'
import react from './assets/react.png'
import nodeJS from './assets/nodeJS.png'
import expressJS from './assets/expressJS.png'
import mongoDB from './assets/mongoDB.png'
import sql from './assets/sql.png'
import git from './assets/git.png'
import figma from './assets/figma.png'

function TechnicalSkills() {
  return (
    <div id='skills' className='p-10 pt-40 pb-40 h-98 bg-gray-200 text-black'>
        <h1 className=' text-5xl  mb-10'>Technical Skills</h1>
        <br></br>
        <div className='flex justify-between'>
        <img src= {html} className="max-w-sm rounded-lg shadow-2xl" />
        <img src= {css} className="max-w-sm rounded-lg shadow-2xl w-36" />
        <img src= {bootstrap} className="max-w-sm rounded-lg shadow-2xl w-36" />
        <img src= {tailwindcss} className="max-w-sm rounded-lg shadow-2xl" />
        <img src= {javascript} className="max-w-sm rounded-lg shadow-2xl" />
        <img src= {react} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <br></br>
        <div className='flex justify-between'>
        <img src= {nodeJS} className="max-w-sm rounded-lg shadow-2xl" />
        <img src= {expressJS} className="max-w-sm rounded-lg shadow-2xl" />
        <img src= {mongoDB} className="max-w-sm rounded-lg shadow-2xl" />
        <img src= {sql} className="max-w-sm rounded-lg shadow-2xl w-36" />
        <img src= {git} className="max-w-sm rounded-lg shadow-2xl" />
        <img src= {figma} className="max-w-sm rounded-lg shadow-2xl w-36" />
        </div>
        
    </div>
  )
}

export default TechnicalSkills