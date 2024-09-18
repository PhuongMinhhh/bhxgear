import React from 'react'
import Curd from './curd'
const addbh = () => {
  return (
    <div>
    <div className='mt-2 mb-2'>

        <a
        className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        href="#"
        >
        <span
            className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
        ></span>

        <button className="relative block border border-current bg-white px-3 py-2"> Thêm  </button>
        </a>
    </div>
    <div className='mt-5 mb-5'>
      <Curd/>
    </div>
    
    </div>
  )
}

export default addbh
