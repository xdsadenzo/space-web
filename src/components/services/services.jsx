import React from 'react'
import { FaReact } from 'react-icons/fa';
import {FaShuttleSpace,FaSpaceAwesome} from 'react-icons/fa6';
import wave from '../../assets/wave.gif';


const ServiceData = [
    {
        title: "HST",
        content: "300-1500KM",
        description: 
        "Used for astronomical observations, capturing stunnig images of the universe",
        icon: <FaReact className="text-7xl" />,
        aosDelay: "300",
    },
    {
        title: "ISS",
        content: "500-1500KM",
        description: 
        "Its a habitable artificial satellite orbiting Earth and serve as a space environment research laboratory",
        icon: <FaShuttleSpace className="text-7xl" />,
        aosDelay: "500",
    },
    {
        title: "GPS",
        content: "300-1500KM",
        description: 
        "Part of Global Positioning System (GPS) used for navigation.",
        icon: <FaSpaceAwesome className="text-7xl" />,
        aosDelay: "700",
    },
    
]
function Services() {
  return (
    <div className='relative z-50 text-white bg-black '>
      <div className="container">
        <div className='min-h-[400px]'>
            <div className='relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-3'>
                {
                    ServiceData.map(
                        (data, index)=> (
                            <div className='min-h-[180px] flex flex-col gap-2 justify-center items-center rounded-xl bg-sky-900/60 backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto'>
                                {data.icon}
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className='text-sm'>{data.description}</p>
                            </div>
                        )
                    )
                }
            </div>
            <img src={
                wave
            } alt="" className='h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]  ' />
        </div>
      </div>
    </div>
  )
}

export default Services
