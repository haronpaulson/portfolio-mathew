import React from 'react'
import './index.css';
import Skillbox from './Skillbox';
import { skillSet } from './Skillset';

function Experience(props) {
  return (
    <div>
      <div className=' flex space-x-6 text-start space'>
        <div className=''>
          <p1>{props.year}</p1>
        </div>
        <div >
          <h1 className=' text-lg font-semibold'>{props.name}</h1>
          <div className=' w-96 h-20  mb-6'>
          <div className=' w-full overflow over overflow-y-hidden overflow-hidden overflow-ellipsis  '>
          <p5 className=' overflow-ellipsis text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium assumenda molestias voluptatem, iste ab sit culpa harum tempora quod quas architecto in esse fugit quaerat. Sunt, ipsam ex nam deserunt in molestiae ipsum totam cum facilis esse repellendus ducimus aut architecto impedit cupiditate delectus commodi dicta ad itaque natus beatae distinctio eos praesentium. Repellendus, cumque tempora provident iusto sed saepe? Cumque exercitationem libero, ea consequatur corporis debitis sed repellat aut quos nisi, vero magni enim odio quia et accusamus.</p5></div>
          </div >
          <div className=' flex space-x-2'>
          <Skillbox name="github"/>
          <Skillbox name="react"/>
          </div>
    
         
        </div>
      </div>
    </div>
  )
}

export default Experience;