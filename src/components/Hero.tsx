import React from 'react';
import AudioComponent from './AudioComponent';

export default function Hero({}) {
  return (
    <div>
      <div className="flex flex-row w-screen bg-gray-400 h-[600px] justify-evenly align-center items-center">
        {/* Left Side */}
        <div className="flex flex-col">
          <span className="text-1xl">Some description about the product</span>
          <span className="text-3xl">Cloud Management</span>
          <span className="text-1xl">
            Less explanation about the product and description
          </span>
          <AudioComponent />
        </div>

        {/* Right Side */}
        <div>
          <img
            className="rounded-md mt-24 "
            src="https://www.cloudmanagementinsider.com/wp-content/uploads/2019/06/Untitled-design-2.png"
          />
        </div>
      </div>
    </div>
  );
}
