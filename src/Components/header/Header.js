import React, { useState } from 'react'
import {logo} from "../../assets/indexx"
// import LocationOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { FaBeer, FaDropbox, FaSearch, FaSearchPlus } from 'react-icons/fa';

const Header = () => {
 const [showAll, setShowAll] = useState(false);
 console.log(showAll)

  return (
  <div>
      <div className='w-full bg-black text-white px-4 py-3 flex items-center'>
      <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'> 
        <img src={logo} alt='logo' />
      </div>

      {/* //image start here */}
      <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
        {/* <LocationOutlinedIcon /> */}
        <p className='text-sm text-lightText font-light flex flex-col'> Deviver to <span className='text-sm font-semibold -mt-1 text-white'>Oman</span></p>
      </div>
   {/* searchbar */}


   <div className='h-10 rounded-md flex flex-grow relative'>
    <span onClick={()=> setShowAll(!showAll)}  className='w-14 h-full bg-gray-200 hover:by-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_light font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'
    
    >All</span><span><FaSearch />  </span>
    {
      showAll && (
        <div>
          <ul>
            <li>All products</li>
            <li>All products</li>
            <li>All products</li>
            <li>All products</li>
            <li>All products</li>
          </ul>
        </div>
      )
    }
    <input className='h-full text-base text-amazon_light flex flex-grow outline-none border-none px-2  
    ' type='text' />
    <span  className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_light cursor-pointer rounded-tr-md  rounded-br-md'>
      <FaSearch />
    </span>
    </div> 
  

    </div>
  </div>
  )
}

export default Header