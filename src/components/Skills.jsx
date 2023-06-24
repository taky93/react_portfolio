import React from 'react';




function Skills() {
  return (
    <div className='font-Raj font-bold text-text h-full'>
            <h1 className='flex  bg-slate-200 justify-center text-3xl md:text-8xl'>Skills</h1>
        <div className='flex bg-slate-200 pt-5 justify-around'>
          <div className='my-10 text-4xl md:text-6xl'>
              <p className='my-5 cursor-pointer hover:animate-bounce duration-200'>
                HTML - intermediate
              </p>
              <p className='my-5 cursor-pointer hover:animate-bounce duration-200'>
                CSS - beginner 
              </p>
              <p className='my-5 cursor-pointer hover:animate-bounce duration-200 '>
                Javascript - intermediate
              </p>
              <p className='my-5 cursor-pointer hover:animate-bounce duration-200'>
                Python - advanced
              </p>
              <p className='my-5 cursor-pointer hover:animate-bounce duration-200'>
                C# - intermediate
              </p>

          </div>
                

            
        </div>
        
    </div>
    
  )
}

export default Skills;