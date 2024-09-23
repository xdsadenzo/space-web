import React from 'react'
import bgVideo from "./assets/earth-bg.mp4"
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Services from './components/services/services'


export default function App() {
  return (
    <div>
      <div className='h-[700px] relative ' >
<video
autoPlay loop muted
className='fixed top-0 right-0 h-[700px] w-full object-cover z[-1]'
>
  <source src={bgVideo} type='video/mp4' />
</video>
<Navbar/>
<Hero/>
      </div>
      {/* Services Cards Section */}
      <Services/>
    </div>
  )
}
