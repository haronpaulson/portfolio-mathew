import React from 'react'
import { GiFilmProjector } from "react-icons/gi";

function Projectbox() {
  return (
    <div className=' flex mt-4 shadow-sm shadow-white p-3'>
        <div className=' w-2/6  px-16  '>
          
        
          <GiFilmProjector className=' text-white  w-28 h-20'/>

        </div>
        <div className=' w-4/6 text-start pr-10'>
            <h1>Trained ML model to detect breaches</h1>
            <div className='  overflow over overflow-y-hidden overflow-hidden overflow-ellipsis  '>
            <p5 className=' overflow-ellipsis text-sm text-slate-400 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium assumenda molestias voluptatem, iste ab sit culpa harum tempora quod quas architecto in esse fugit quaerat. Sunt, ipsam ex nam deserunt in molestiae ipsum totam cum facilis esse repellendus ducimus aut architecto impedit cupiditate delectus commodi dicta ad itaque natus beatae distinctio eos praesentium. Repellendus, cumque tempora provident iusto sed saepe? Cumque exercitationem libero, ea consequatur corporis debitis sed repellat aut quos nisi, vero magni enim odio quia et accusamus.</p5></div>
        
    
            
        </div>
    </div>
  )
}

export default Projectbox