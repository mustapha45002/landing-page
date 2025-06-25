import React from 'react'
import me from '../assets/me.jpg'

const Features_2 = () => {
  return (
    <>
      <div className='container mx-auto py-10 bg-gray-100 rounded-2xl'>

        {/* part-1 */}
        <h1 className='font-bold  text-center text-3xl mb-22'>What's different about Manage?</h1>

        {/* cards container */}
        <div className="container flex flex-col items-center justify-around mx-auto  space-y-20 md:flex-row md:space-y-0 text-center">

          {/* Card 1 */}
          <div className="w-3/5 md:w-1/4 flex flex-col relative items-center  bg-green-100 rounded-2xl shadow p-2">
            <img src={me} className='w-24 h-24 rounded-full absolute mt-[-66px]' alt="Img N/A" />
            <h3 className='font-bold text-xl pb-2 pt-10'>Mostafa Ali</h3>
            <p className='text-gray-600'>This is Mostafa, learning HTML, CSS, JS, and more.This is Mostafa, learning HTML, CSS, JS, and more.</p>
          </div>

          {/* Card 2 */}
          <div className="w-3/5 md:w-1/4 flex flex-col relative items-center  bg-yellow-100 rounded-2xl shadow p-2">
            <img src={me} className='w-24 h-24 rounded-full absolute mt-[-66px]' alt="Img N/A" />
            <h3 className='font-bold text-xl pb-2 pt-10'>Mostafa Ali</h3>
            <p className='text-gray-600'>This is Mostafa, learning HTML, CSS, JS, and more.This is Mostafa, learning HTML, CSS, JS, and more.</p>
          </div>

          {/* Card 3 */}
          <div className="w-3/5 md:w-1/4 flex flex-col relative items-center  bg-blue-100 rounded-2xl shadow p-2">
            <img src={me} className='w-24 h-24 rounded-full absolute mt-[-66px]' alt="Img N/A" />
            <h3 className='font-bold text-xl pb-2 pt-10'>Mostafa Ali</h3>
            <p className='text-gray-600'>This is Mostafa, learning HTML, CSS, JS, and more.This is Mostafa, learning HTML, CSS, JS, and more.</p>
          </div>

        </div>
        {/* part-3 => button */}
        <div className="flex flex-row justify-center">

          <a href="/#" className="baseline px-4 py-0 mt-10 text-white bg-red-400 hover:bg-red-600 rounded-2xl transition duration-200">
            Get Start
          </a>

        </div>
      </div>
    </>
  )
}

export default Features_2
