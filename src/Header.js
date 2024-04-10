import React from 'react'

function Header() {
  return (
    <div className=' p-2 pr-12 text-white '>
        <div>
            <div className=' justify-end flex '>
                <ul className=' flex space-x-4'>
                <li className="list"> Home</li>
                <li className="list">About</li>
                <li className="list">Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header