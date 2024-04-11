import React from 'react'
import Projectbox from './Projectbox'


function Projects() {
  return (
    <div>
        <div>
            <div className=''>
                <h1 className=' text-white text-xl font-semibold'> Projects</h1>
                <div className='  p-2 space-y-4'>
                <Projectbox />
                <Projectbox></Projectbox>
         
                </div>
             
            </div>


        </div>
    </div>
  )
}

export default Projects