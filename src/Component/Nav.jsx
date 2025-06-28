import React from 'react'
import swan from '../assets/Swan.svg'
import { CiMenuKebab } from "react-icons/ci";

const Nav = () => {
  return (
    <nav className="container flex justify-between mx-auto  items-center p-1 bg-red-400 rounded-xl">
      {/* part-1 */}
      <div className='flex justify-between items-center'>
        <img src={swan} alt="" className='w-[100px] h-[50px]' />
        <h3 className='font-bold h-[15px]'>swan</h3>
      </div>
      {/* part-2 */}
      <div className='hidden  md:flex space-x-8'>
        <a href='/#' className='hover:text-gray-400'>Product</a>
        <a href='/#' className='hover:text-gray-400'>Pricing</a>
        <a href='/#' className='hover:text-gray-400'>About</a>
        <a href='/#' className='hover:text-gray-400'>contact us</a>
        <a href='/#' className='hover:text-gray-400'>Community</a>
      </div>
      {/* part-3 */}
      <a href="/#" className='hidden md:block bg-white rounded-xl mr-4 px-4 py-1 text-red-400'>Start Now</a>

    </nav>
  )
}

export default Nav


