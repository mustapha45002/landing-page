import React from 'react';

const Features = () => {
  return (
    <>
      {/* Container */}
      <div className="container flex flex-col md:flex-row justify-around items-center mx-auto p-2 gap-6 text-center">

        {/* Part 1 */}
        <div className="w-full md:w-2/5 flex flex-col">
          <h2 className="font-bold text-4xl pb-1">What’s different about Manage?</h2>
          <p className="text-gray-400">
            Manage simplifies your team workflows with efficient collaboration, tracking, and alignment.
          </p>
        </div>

        {/* Part 2  => container */}
        <div className="md:w-2/5 flex flex-col space-y-4 text-left justify-center ">

          {/* Part 2 => Feature 1 */}
          <div className="flex flex-row items-start space-x-2">
            <span className='text-center w-12 h-6 mt-2 bg-green-400 text-white font-bold rounded-full'>01</span>
            <div>
              <h2 className="text-2xl">Track company-wide progress</h2>
              <p className="text-gray-400">
                Monitor milestones and ensure everyone is aligned with shared goals.
              </p>
            </div>
          </div>

          {/* Part 2 => Feature 2 */}
          <div className="flex flex-row items-start space-x-2">
            <span className='text-center w-12 h-6 mt-2 bg-green-400 text-white font-bold rounded-full'>02</span>
            <div>
              <h2 className="text-2xl">Advanced reporting</h2>
              <p className="text-gray-400">
                Easily generate reports to understand performance and take action quickly.
              </p>
            </div>
          </div>

          {/* Part 2 => Feature 3 */}
          <div className="flex flex-row items-start space-x-2">
            <span className='text-center w-12 h-6 mt-2 bg-green-400 text-white font-bold rounded-full'>03</span>
            <div>
              <h2 className="text-2xl">Everything in one place</h2>
              <p className="text-gray-400">
                Stay organized and access all your team’s work and updates in one dashboard.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Features;
