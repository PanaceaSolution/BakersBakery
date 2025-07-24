import React from "react";

const DeliveryZoneCard = ({ title, area, deliveryTime, width = 362 }) => {
  return (
    <div
      className="bg-white rounded-[10px] px-[21px] py-[26px] flex flex-col gap-[10px] shadow-sm"
      style={{ width: `${width}px`, height: "191px" }}
    >
      <div className="flex items-center gap-[10px]">
        <div className="w-[18px] h-[18px] bg-[#00E057] rounded-[2px]" />
        <h2 className="text-[20px] font-semibold leading-[100%] font-poppins">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-[10px] mt-[10px] text-[16px] font-poppins">
        <p className="flex gap-2 items-start">
          <span className="text-black text-[20px] leading-[100%]">•</span>
          <span>
            <span className="font-semibold">Area:</span> {area}
          </span>
        </p>
        <p className="flex gap-2 items-start">
          <span className="text-black text-[20px] leading-[100%]">•</span>
          <span>
            <span className="font-semibold">Delivery Time:</span> {deliveryTime}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DeliveryZoneCard;
