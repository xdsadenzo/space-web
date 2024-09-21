import React from 'react'

const Hero = () => {
  return (
    <div className='relative z-50 h-full text-white bg-black/20 '>
      <div className="flex items-center justify-center h-full p-4">
        <div className="container grid-cols-1 gap-4 sm:grid-cols-2">
          <div className='space-y-4'>
            <h1 className='text-5xl font-bold'>
              Orbit Of The Earth
            </h1>
            <p className='w-96'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Expedita, adipisci soluta dignissimos voluptates inventore
               earum cumque voluptatem consequatur. Corrupti, ut accusa
               mus alias magnam quia magni sequi dicta doloribus aut quos! 
               </p>
               <button className='px-4 py-1 text-white duration-200 bg-blue-400 rounded-md hover:bg-blue'>
                Learn More
               </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Hero

