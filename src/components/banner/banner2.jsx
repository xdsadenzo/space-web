import React from 'react';
import satelliteImage from '../../assets/satelite2.jpg'

const Banner2 = () => { 
  return (
    <>
    <div className='relative z-50 pb-12 text-white bg-black '>
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2 ">
            
            
            <div className='p-4 space-y-3 border-b-2 border-l-2 xl:pr-36 border-l-sky-800 border-b-sky-800 '>
                <p className='uppercase text-sky-800'>Our Mission </p>
                <h1 className='text-5xl uppercase'>Rapidcast</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae consequatur facilis nobis sapiente ad sint, odio fugiat quis dolor veniam adipisci perferendis reiciendis?</p>
            <button className='primary-button'>Learn More</button>
            </div>
            <div>
            <img src={satelliteImage} alt="" />
     </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Banner2;
