import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const HeaderBottom = () => {
    const [sidebar, setSidebar] = useState(false)
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white'>
      <ul className='flex items-center gap-2 text-sm tracking-wide'>
        <li  className='headerHover'> <FaSearch onClick={()=> setSidebar(!sidebar)} />  All</li>
        <li className='headerHover'>Today's Deals...</li>
        <li className='headerHover'>Customer Service</li>
        <li className='headerHover'>Gift Cards</li>
        <li className='headerHover'>Registry</li>
        <li className='headerHover'>Selllllll</li>
      </ul>
{
  sidebar && (
    <div className='w-full h-screen text-white fixed top-0 left-0 bg-amazon_light bg-opacity-50'>
      <div className='w-full h-full relative'>
        <div className='w-[350px] h-full bg-white border-black'>
          <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
            <FaSearch />
            <h3 className='font-titleFont font-bold text-xl tracking-wide'>Hello Sign In </h3>
          </div>
          <div>
            <h3 className='text-black text-lg font-titleFont font-semibold mb-1 px-6'>Digital Content & Devices</h3>
            <ul>
              <li className='text-black flex items-center justify-center hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Amazon Musice <span><FaSearch /></span></li>
              <li className='text-black flex items-center justify-center hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Amazon Musice <span><FaSearch /></span></li>
              <li className='text-black flex items-center justify-center hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Amazon Musice <span><FaSearch /></span></li>
            </ul>
          </div>

        </div>
        </div>

    </div>
  )
}
        </div>
  )
}

export default HeaderBottom