import React from 'react'
import Experience from './Experience'
import { GoArrowUpRight } from "react-icons/go";
import Exportpdf from './Exportpdf';
import Projects from './Projects';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Mainpage() {
  return (
    <div className=' text-white mr-10 '>
        <div className=' flex'>
            <div className=' w-1/2 h-  pt-16 text-start pl-40 fixed '>
                <div className=' space- '>
                <h1 className=' text-4xl font-bold pt-3 pb-4'>Haron Paulson</h1>
                <p1 className=' pb-4'> Junior Business Analyst & React developer</p1> <br/>
                <p2 className=' text-slate-400'> I organize sprints and build web pages</p2>
                </div>
                <div className=' flex items-center mt-10'>
                    <div className='  w-12 border-2 mr-6'> </div><span className=''> About</span>
                </div>
                <div className=' flex items-center mt-2'>
                <div className='  w-12 border-2 mr-6'> </div><span className=''> Home</span>
            </div>
            <div className=' flex items-center mt-2'>
                <div className='  w-12 border-2 mr-6'> </div><span className=''> Contact</span>
            </div>

            <div className=' flex mt-52 space-x-4 pl-16 text-slate-400'>
           
            <a href='#'><FaGithub className=' w-10 h-8'/></a>
            <a href='#'><FaLinkedin className=' w-10 h-8'/></a>
            <a href='#'><FaTwitter className=' w-10 h-8'/></a>
            </div>

       
            </div>
            <div className='  h-[] flex justify-end ml-20 pt-16 pr- '>
                <div className=' w-1/2  pt-'>
                    <div className=' space-y-16'>
                    <ul className=' space-y-8 text-start'>
                    <li><p1 >Back in 2021, I decided to try my hand at creating custom webpages and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of being part of software developments for a consulting company, a start-up, a huge corporation and a VPN provider.</p1></li>

                    <li>  <p2 >My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.</p2></li>
                    <li>
                    <p2>When I’m not at the computer, I’m usually playing badminton, reading, hanging out with my friends and two cats, or jogging around the streets trying to burn some calories </p2>
                    </li>
                    </ul>
                    <div> <Experience year="2023-24 - 1yr3mon" name="Junior Business Analyst . Anitech Pty"/></div>  
                    <div> <Experience year="2022 - 3months" name="Web developer intern"/></div> 

                    <div><Exportpdf />
                    </div>
                    <div>
                    <Projects />
                
                    </div>
                    </div>
                    
                  


                </div>
    
            </div>
        </div>
    </div>
  )
}

export default Mainpage
