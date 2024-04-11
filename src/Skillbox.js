import React from 'react'
import { skillSet } from './Skillset'
import "./index.css"

function Skillbox(props) {
  return (
    <div className=' '>
        <div className=' border-t-[0.5px] rounded-lg shadow-sm shadow-white bg-blue-950 textcolor w-20 h-7 items-center text-center '>
            <p1 className=' p-[2px] overskill text-sm overflow-hidden overflow-x-hidden overflow-ellipsis  '>{props.name}</p1>

        </div>
    </div>
  )
}

export default Skillbox