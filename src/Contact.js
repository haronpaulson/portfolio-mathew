import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline, IoMail } from "react-icons/io5";


import './homepage.css';

function Contact() {
  return (
    <div pl-52 className=' pl-52 pr-40 pt-0  h-[360px] relative mt-20'>
 
        <div className=' border-2 border-white w-96 '></div>
        <div className=' border-2 border-white w-96 ml-[770px] '></div>
        <div className=' border-2 border-white w-96 absolute bottom-0'></div>
        <div className=' border-2 border-white w-96 ml-[770px] absolute bottom-0 '></div>

        
        <div className='  relative '>
            <div className=' text-center absolute -top-8 left-[465px]'>
                <h1 className=' text-white text-3xl font-semibold'>Contact Me</h1>
             
             </div>
             <div className=' text-center absolute left-[475px] top-[326px]'>
         
             <ul className=' text-white  flex space-x-6 '>
             <li className=" "> <a href ="#"><FaInstagram className=' w-12 h-10' /></a></li>
             <li className=""><a href ="#"><FaLinkedin className=' w-12 h-10'/></a></li>
             <li className=""><a href ="#"><FaFacebook className=' w-12 h-10'/></a></li>
             </ul>
          
          </div>
        </div>
        <div className='  text-yellow-400  space-y-16 justify- p-8 pt-20'>
        <div className=' mb-6 flex  space-x-6  justify-center'>
        <div className=' w-64 h-12 bg-gray-700 rounded-md items-center flex p-3'>
        <IoMail className=' w-12 h-6 text-white'/><p1> haronpaulson@gmail.com</p1>
      </div>
        <div className=' w-60 h-12 bg-gray-700 rounded-md items-center flex p-3'>
        <FaPhoneAlt className=' w-12 h-6 text-white'/><p1> +91 9894162794</p1>
      </div>
      </div>

    <div className=' w-60 h-12 bg-gray-700 rounded-md items- flex p-3 mx-auto'>
    <IoLocationOutline className=' w-12 h-6 text-white '/><p1> Coimbatore, Chennai</p1>
  </div>
    </div>
    </div>
  )
}

export default Contact