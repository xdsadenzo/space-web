import React from 'react';
import { HiLocationMarker } from 'react-icons/hi'
import {MdCall , MdMessage} from 'react-icons/md'
import { FaInstagram,FaFacebook,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='relative z-50 px-5 text-white bg-gray-800'>
        <section className='max-w-[1200px] mx-auto text-white'>
            <div className="grid py-5 md:grid-cols-3">
                {/* first col */}
                <div className='px-4 py-8 '>
                    <h1 className='mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left'>Be Ready To Grow</h1>
                    <p>Get Exclusive <span className='font-bold'>Update</span> straight to your inbox.
                    </p>
                    <br />
                    <div className='flex items-center h-10 '>
                        <input type="text"
                        className='w-full px-3 py-1 h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2' placeholder='Email'
                         />
                         <button className='primary-button'>
                            OK
                         </button>
                    </div>
                </div>
                {/* second col */}
                <div className='flex grid-cols-2 col-span-2 sm:grid-cols-1 md:pl-10'>
                    <div>
                        <div className='px-4 py-8 '>
                            <h1 className='mb-3 text-xl font-bold'>Quick Links</h1>
                            <ul className='flex flex-col gap-4'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Login</a>
                                </li>
                            </ul>
                            
                            
                        </div>
                    </div>
                    <div>
                        <div className='px-4 py-8 '>
                            <h1 className='mb-3 text-xl font-bold'>Quick Links</h1>
                            <ul className='flex flex-col gap-4'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Login</a>
                                </li>
                            </ul>
                            
                         
                        </div>
                    </div>
                    <div>
                    <div className='px-4 py-8 '>
                    <h1 className='font-bold tex2t-xl mb-'>Contact Us</h1>
                    </div>
                    <div>
                    <div className='space-y-3 '>
                        
                        <div className='flex items-center gap-3 '>
                             <HiLocationMarker/>
                             <p>Naval, Karachi</p>
                        </div>
                        <br />
                        <div className='flex items-center gap-3 '>
                             <MdMessage/>
                             <p>sajid.timeglobal@gmail.com</p>
                        </div>
                        <br />
                        <div className='flex items-center gap-3 '>
                             <MdCall/>
                             <p>03122922547</p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* bottom col */}
            <div className='sm:block'>
                <div className='flex items-center justify-between py-6 border-t-2 border-gray-400 '>
                    <span className='text-sm text-gray-400 '>
                        copyright &copy; 2024 by Sajid Space
                    </span>
                    <div className='flex items-center justify-center gap-4 mb-4'>
                        <a href="#">
                         <FaInstagram className="text-4xl"/>
                        </a>
                        <a href="#">
                         <FaFacebook
                          className="text-4xl"/>
                        </a>
                        <a href="#">
                         <FaLinkedin className="text-4xl"/>
                        </a>
                    </div>
                    <span className='text-sm text-gray-400'>
                        <ul className='flex gap-3'>
                            <li>
                               Privacy Policy  
                            </li>
                            <li>
                               Terms And condition
                            </li>
                            
                            </ul> </span>
                </div>
            </div>
        </section>
              
    </div>
  );
}

export default Footer;
