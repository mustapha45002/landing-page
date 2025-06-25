import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiHeron } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      {/* container */}
      <div className="flex flex-row justify-center space-x-10 py-4 bg-gray-900">
        <a href="">
          <FaFacebookSquare className='text-4xl text-blue-600' />
        </a>
        <a href="">
          <FaInstagram className='text-4xl text-pink-500' />
        </a>
        <a href="">
          <GiHeron className='text-4xl text-emerald-800' />
        </a>
        <a href="">
          <FaTwitter className='text-4xl text-sky-400' />
        </a>
        <a href="">
          <FaYoutube className='text-4xl text-red-800' />
        </a>
      </div>
    </>
  )
}

export default Footer