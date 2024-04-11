import React from 'react';
import { testimonialData } from './Testimonialsdata';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className=' px-52 pb-10 pt-20'>
        <div>
            <div>
                <h1 className=' text-white text-2xl font-semibold text-center pb-3'> Testimonials</h1>
             
            </div>
        </div>
      
    
        <Slider {...settings}>
        {testimonialData.map((item) => (
            <div className='  space-x-10 text-center   pt-10 space-y-6 bg-slate-900 mb-4 pb-4  rounded-lg'>
            <div className=' flex  justify-center'>
            
            <img src='person.jpg' alt='person-img' className=' rounded-lg ' />
        </div>
             <div className=' text-white px-52   text-center   '>
                <div className='  justify-center '>
                <p1> {item.about}.</p1> 
                <br /><p2 className =' text-yellow-400'>{item.name}</p2><br/>
                <p3 className=' text-yellow-400'>{item.role} , Anitech Pvt Ltd</p3>
                </div>
                <div className=' '></div>
              </div>

      
           </div>
            

        ))}
        </Slider>
        </div>
    
  )
}

export default Testimonial;