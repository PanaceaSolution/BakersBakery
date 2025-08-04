import React, { useState } from "react";

const CartTotal = () => {
  const [shipping, setShipping] = useState(50);

  const subtotal = 2200;
  const discount = 0;
  const total = subtotal + shipping;

  return (
    <div className="max-w-[741px] w-full h-auto mx-auto p-6 sm:p-4 rounded-lg shadow-md flex flex-col justify-between space-y-6">
      {/* Title */}
      <h2 className="text-xl sm:text-lg font-semibold font-poppins text-gray-800">
        CARD TOTAL
      </h2>

      {/* Subtotal & Discount */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-gray-700 font-poppins text-base sm:text-sm">Subtotal</span>
          <span className="text-gray-900 font-semibold font-poppins text-base sm:text-sm">
            Rs {subtotal}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700 font-poppins text-base sm:text-sm">Discount</span>
          <span className="text-gray-900 font-semibold font-poppins text-base sm:text-sm">
            Rs {discount}
          </span>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Shipping */}
      <div className="flex flex-col gap-3">
        <span className="text-gray-700 font-poppins text-base sm:text-sm">Shipping</span>
        <div className="flex flex-col gap-2 ml-3">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={shipping === 50}
              onChange={() => setShipping(50)}
              className="accent-[#8C1C32] w-4 h-4"
            />
            <span className="text-gray-600 font-poppins text-sm sm:text-xs">
              Inside Ringroad KTM : <span className="text-[#8C1C32]">Rs 50</span>
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={shipping === 100}
              onChange={() => setShipping(100)}
              className="accent-[#8C1C32] w-4 h-4"
            />
            <span className="text-gray-600 font-poppins text-sm sm:text-xs">
              Outside Ringroad / Bhaktapur / Lalitpur :{" "}
              <span className="text-[#8C1C32]">Rs 100</span>
            </span>
          </label>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="text-gray-700 font-poppins text-lg sm:text-base font-semibold">
          Total
        </span>
        <span className="text-[#8C1C32] font-bold text-lg sm:text-base font-poppins">
          Rs {total}
        </span>
      </div>

      {/* Button */}
      <button className="w-full bg-[#8C1C32] text-white font-poppins py-3 sm:py-2 rounded-md hover:bg-[#721026] transition">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default CartTotal;
