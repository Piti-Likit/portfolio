import React from 'react'

function Project() {
  return (
    <div id="projects" className='p-10 pt-40 pb-40 h-98 bg-white  '>
      <div>
        {/* <button className="btn btn-primary">Race Days</button>
        <button className="btn btn-primary">Dog Years</button>
        <button className="btn btn-primary">Rock, Scissors, Paper</button>
        <button className="btn btn-primary">Magic Eight Balls</button>
        <button className="btn btn-primary">Kelvin Weather</button>
        <button className="btn btn-primary">Find Your Hat Game</button>
        <button className="btn btn-primary">Mini Project</button>
        <button className="btn btn-primary">Final Project</button> */}

        <h1 className='text-5xl text-black mb-10 '>Projects</h1>
        <a  href='https://github.com/Piti-Likit'>
      <div className='flex flex-col '>
        <div className='flex justify-around my-10'>
        <button className="btn btn-primary w-80 h-20 bg-gray-500">Race Days</button>
        <button className="btn btn-primary w-80 h-20 bg-gray-500">Dog Years</button>
        <button className="btn btn-primary w-80 h-20 bg-gray-500">Rock, Scissors, Paper</button>
        </div>       
                      
        <div className='flex justify-around my-10' >
        <button className="btn btn-primary w-80 h-20 bg-gray-500">Magic Eight Balls</button>
        <button className="btn btn-primary w-80 h-20 bg-gray-500">Kelvin Weather</button>
        <button className="btn btn-primary w-80 h-20 bg-gray-500">Find Your Hat Game</button>
        </div>
                         
        <div className='flex justify-around my-10'>   
        <button className="btn btn-primary w-80 h-20 bg-gray-500">Mini Project</button>
        <button className="btn btn-primary w-80 h-20 bg-gray-500">Final Project</button>
        </div> 
      </div> 
        </a>
     </div>        
                     
    </div>
  )

}

export default Project