import React from "react";

const SubscribeSection = () => {
  return (
    <section className="w-full max-w-[1920px] h-[338px] bg-[#F8F8F8] flex flex-col items-center justify-center px-8 md:px-20 py-[59px] gap-[10px] mx-auto overflow-hidden">
      {/* Heading & Subheading */}
      <div className="w-full max-w-[612px] h-[72px] flex flex-col items-center gap-[2px]">
        <h2 className="text-[24px] font-bold text-gray-900 text-center leading-tight">
          Get 10% Off Your First Order!
        </h2>
        <p className="text-[16px] text-gray-600 text-center leading-snug">
          Join our community for exclusive deals, updates & more.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-full max-w-[522px] mt-[10px]"
      >
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="flex-1 rounded-l-full border border-gray-300 px-5 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#8C1C32]"
        />
        <button
          type="submit"
          className="bg-[#8C1C32] text-white px-6 py-3 rounded-r-full text-[14px] hover:bg-[#731628] transition-colors"
        >
          Subscribe
        </button>
      </form>

      {/* Note */}
      <p className="text-[12px] text-gray-500 mt-[10px]">
        Note: We promise not to spam!
      </p>
    </section>
  );
};

export default SubscribeSection;
