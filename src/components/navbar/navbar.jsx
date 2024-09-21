import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='fixed top-0 right-0 z-50 w-full py-4 bg-black/10 backdrop-blur-sm sm:py-4'>
      <div className="container">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-2xl font-bold text-white">
                <img src={Logo} alt="" className='w-10' />
                <span>SAJID SPACE</span>
            </div>
            <div className='text-white '>
                <ul className='flex items-center gap-6 py-4 text-xl sm:py-0'>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Technology</a>
                    </li>
                    <li>
                        <a href="#">Galaxy</a>
                    </li>
                    <li>
                        <a href="#">Satelite</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className='px-3 py-1 text-white border-2 border-white rounded-md'>
                    Login
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
