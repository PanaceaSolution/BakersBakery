import React from "react";
import {
  BsCheckCircleFill,
  BsClockFill,
  BsGeoAltFill,
  BsBoxSeamFill,
} from "react-icons/bs";

const SweetDeliverySection = () => {
  return (
    <section className="bg-gray-50 w-full max-w-[1920px] mx-auto py-16 overflow-hidden">
      <div className="w-full max-w-[1741px] h-[430px] mx-auto flex flex-col gap-[46px]">
        {/* Heading */}
        <div
          className="mx-auto flex flex-col gap-[9px] opacity-100 rotate-0"
          style={{
            width: "1740px",
            height: "75px",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <h2 className="font-semibold text-[24px] leading-[1] tracking-normal m-0">
            Sweet Delivery, Right On Time
          </h2>
          <p className="font-normal text-[20px] leading-[1] tracking-normal text-gray-600 m-0">
            Enjoy freshly baked happiness delivered straight to your doorstep —
            safe, fast, and always on time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[46px]">
          {/* Card 1 */}
          <div className="bg-white shadow rounded-[10px] w-full max-w-[352px] h-[309px] flex flex-col items-start text-left py-[66px] px-[31px]">
            <BsCheckCircleFill className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Free Delivery
            </h3>
            <p className="text-gray-600">
              Within 5km — No extra charge on orders over Rs. 500.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow rounded-[10px] w-full max-w-[352px] h-[309px] flex flex-col items-start text-left py-[66px] px-[31px]">
            <BsClockFill className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Same-Day Delivery
            </h3>
            <p className="text-gray-600">
              Order before 3 PM and get your cake the same day!
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow rounded-[10px] w-full max-w-[352px] h-[309px] flex flex-col items-start text-left py-[66px] px-[31px]">
            <BsGeoAltFill className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Live Tracking
            </h3>
            <p className="text-gray-600">
              Track your cake from oven to your doorstep in real time.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow rounded-[10px] w-full max-w-[352px] h-[309px] flex flex-col items-start text-left py-[66px] px-[31px]">
            <BsBoxSeamFill className="text-4xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Safe Packaging
            </h3>
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
