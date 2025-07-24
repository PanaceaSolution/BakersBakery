import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <button
      className="w-[305px] h-[42px] flex items-center justify-center gap-2 rounded-[10px] px-4 py-2 bg-white shadow-md
                 md:w-[305px] md:h-[42px] hover:shadow-lg transition-all duration-200"
    >
      <span className="text-black font-semibold text-sm sm:text-base">ORDER VIA</span>
      <FaWhatsapp className="text-green-500 text-lg sm:text-xl" />
      <span className="text-green-500 font-semibold text-sm sm:text-base">WHATSAPP</span>
    </button>
  );
};

export default WhatsAppButton;
