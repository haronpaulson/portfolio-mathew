import logo from './logo.svg';
import Header from './Header';
import Mainpage from './Mainpage';
import Skillbox from './Skillbox';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react';
import Testimonial from './Testimonial';
import './App.css';
import { FaHeartbeat } from "react-icons/fa";
import Contact from './Contact';
import Last from './Last';

function App() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className="App" data-aos="zoom-in" >

  
      <Mainpage />
      <div className=''>
        <h1>welcome to new cont</h1>
        <Testimonial />
      </div>
      <Contact/>
      <Last />
   

     
    </div>
  );
}

export default App;
