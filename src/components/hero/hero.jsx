import React from 'react'
import Mountainpng from '../../assets/moon-surface-hd.png'

const Hero = () => {
  return (
    <div className='relative z-50 h-full text-white bg-black/20 '>
      <div className="flex items-center justify-center h-full p-4">
        <div className="container grid-cols-1 gap-4 sm:grid-cols-2">
          <div className='space-y-4 lg:pr-36'>
            <h1 className='text-5xl font-bold uppercase'>
              Orbit Of The Earth
            </h1>
            <p className='w-96'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Expedita, adipisci soluta dignissimos voluptates inventore
               earum cumque voluptatem consequatur. Corrupti, ut accusa
               mus alias magnam quia magni sequi dicta doloribus aut quos! 
               </p>
               <button className='px-4 py-2 text-white duration-200 bg-blue-400 rounded-md hover:bg-blue'>
                Learn More
               </button>
          </div>
          <div></div>
        </div>
      </div>
      {/* surgace section  */}
      <img src={Mountainpng} alt="" className='absolute bottom-0 right-0 z-10 w-full brightness-50'/>
      {/* bottom gradient section */}
      <div className='absolute bottom-0 z-30 w-full bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px] '></div>
    </div>
  )
}

export default Hero

