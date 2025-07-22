import React from 'react';
import { MapPin } from 'lucide-react';


const CheckAreaButton = () => {

  const handleClick = () => {
    console.log('Check Your Area button clicked!');

  };

  return (
    <button
      onClick={handleClick}
      className="
        w-[263px] h-[44px]
        flex items-center justify-center gap-2
        bg-[#A51C30] text-white
        rounded-xl p-2
        font-bold text-base font-sans
        border-none cursor-pointer opacity-100
        shadow-lg hover:bg-[#8B182B] transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-[#A51C30] focus:ring-opacity-50
      "
    >
     
      <MapPin size={20} />
      <span>Check Your Area</span>
    </button>
  );
};

export default CheckAreaButton;
