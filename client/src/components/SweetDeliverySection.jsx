import React from 'react';
import { BsCheckCircleFill, BsClockFill, BsGeoAltFill, BsBoxSeamFill } from 'react-icons/bs'; 

const SweetDeliverySection = () => {
  return (
   
    <section className="bg-white py-16"> 
      
      <div
        className="w-[1741px] h-[430px] ml-[90px] mr-[89px] // Exact width, height, and left/right margins
                   flex flex-col space-y-[46px] // Uses flexbox for vertical stacking and 46px gap
      ">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sweet Delivery, Right On Time
          </h2>
          <p className="text-lg text-gray-600">
            Enjoy freshly baked happiness delivered straight to your doorstep – safe, fast, and always on time.
          </p>
        </div>
        <div
          className="grid grid-cols-4 w-[1741px] h-[309px] gap-[111px]
                     justify-items-center"
        >
          {/* Free Delivery Card */}
          <div
            className="bg-white shadow-md flex flex-col items-center text-center
                       w-[352px] h-[309px] rounded-[10px] py-[66px] px-[31px]"
          >
            <div className="text-4xl text-gray-800 mb-4">
              <BsCheckCircleFill />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Delivery</h3>
            <p className="text-gray-600">
              Within 5km – No extra charge on orders over Rs. 500.
            </p>
          </div>

          {/* Delivery Card */}
          <div
            className="bg-white shadow-md flex flex-col items-center text-center
                       w-[352px] h-[309px] rounded-[10px] py-[66px] px-[31px]"
          >
            <div className="text-4xl text-gray-800 mb-4">
              <BsClockFill />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Same-Day Delivery</h3>
            <p className="text-gray-600">
              Order before 3 PM and get your cake the same day!
            </p>
          </div>

          {/* Live Tracking Card */}
          <div
            className="bg-white shadow-md flex flex-col items-center text-center
                       w-[352px] h-[309px] rounded-[10px] py-[66px] px-[31px]"
          >
            <div className="text-4xl text-gray-800 mb-4">
              <BsGeoAltFill />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Tracking</h3>
            <p className="text-gray-600">
              Track your cake from oven to your doorstep in real time.
            </p>
          </div>

          {/* Safe Packaging Card */}
          <div
            className="bg-white shadow-md flex flex-col items-center text-center
                       w-[352px] h-[309px] rounded-[10px] py-[66px] px-[31px]"
          >
            <div className="text-4xl text-gray-800 mb-4">
              <BsBoxSeamFill />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Packaging</h3>
            <p className="text-gray-600">
              Handled with care, hygienically packed, and sealed fresh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SweetDeliverySection;