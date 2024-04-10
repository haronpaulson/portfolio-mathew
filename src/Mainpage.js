import React from 'react'
import Experience from './Experience'

function Mainpage() {
  return (
    <div className=' text-white pr-10'>
        <div className=' flex pt'>
            <div className=' w-1/2 h-screen fixed  pt-20 text-start pl-40'>
                <div className=' space-'>
                <h1 className=' text-4xl font-bold pt-3 pb-4'>Brittany Chang </h1>
                <p1 className=' pb-4'> Cyber Security Analyst</p1> <br/>
                <p2> I build structures and algorithms to protect data</p2>
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

       
            </div>
            <div className='  h-[1200px] flex justify-end ml-20'>
                <div className=' w-1/2 pt-16'>
                    <div className=' space-y-20'>
                    <ul className=' space-y-8 text-start'>
                    <li><p1 >Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.</p1></li>

                    <li>  <p2 >My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.</p2></li>
                    <li>
                    <p2>When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds</p2>
                    </li>
                    </ul>
                    <div> <Experience/></div>                 
                    </div>
                  


                </div>
    
            </div>
        </div>
    </div>
  )
}

export default Mainpage