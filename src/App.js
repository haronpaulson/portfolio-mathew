import logo from './logo.svg';
import Header from './Header';
import Mainpage from './Mainpage';
import Skillbox from './Skillbox';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react';

import './App.css';
import { FaHeartbeat } from "react-icons/fa";

function App() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className="App" data-aos="zoom-in" >

  
      <Mainpage />
      <div className=' flex justify-center bg-black'>
      <h1 className=' text-white'>Mathew loves coding</h1>
      </div>

      <div className=' text-white text-4xl flex justify-center p-6 space-x-4'>
      <h1> Mathew </h1>
     
      <FaHeartbeat  className=' text-red-600'/>
      <h1>Hacking</h1>
      </div>
     
    </div>
  );
}

export default App;
