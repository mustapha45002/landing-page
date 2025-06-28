import React from 'react'

const Hero = () => {
    return (
        <>
             {/* container */}
            <div className="container flex flex-col md:flex-row justify-around bg-white items-center gap-x-6 mt-20  py-2 mx-auto text-center">
                {/* part-1 */}
                <div className='flex flex-col w-[50vw] space-y-2 mb-8'>
                    <h1 className='font-bold size text-3xl '>Bring everyone together to build better products</h1>
                    <p className='text-gray-700'>Manage makes it simple for software teams to plans day-to tasks while keeping the target team goals in view</p>
                    <div> <a href="/#" className='inline-block bg-red-400 rounded-xl px-4 text-white hover:bg-red-700'>Start Now</a>
                    </div>
                </div>
                {/* part-2 */}
                <div className='flex flex-col w-[50vw] space-y-2 mb-8'>
                    <h1 className='font-bold size text-3xl '>Bring everyone together to build better products</h1>
                    <p className='text-gray-700 '>Manage makes it simple for software teams to plans day-to tasks while keeping the target team goals in view</p>
                    <div><a href="/#" className='inline-block bg-red-400 rounded-xl px-4 text-white hover:bg-red-700'>Start Now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero