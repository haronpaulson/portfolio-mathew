import logo from './logo.svg';
import Header from './Header';
import Mainpage from './Mainpage';
import Skillbox from './Skillbox';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react';

import './App.css';


function App() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className="App" data-aos="zoom-in" >

    
      <Mainpage />
      <div className=' flex justify-center bg-black'>
      <h1 className=' text-white'>Mathew loves</h1>
      </div>
     
    </div>
  );
}

export default App;
