import React from "react";
import BillingForm from "./BillingForm";
import CartTotal from "./CartTotal";
import PaymentMethod from "./PaymentMethod";


const CheckoutSection = () => {
  return (
   <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-10">
  {/* Left Section */}
  <div className="flex-1 max-w-[973px]">
    <BillingForm />
  </div>

  {/* Right Section */}
  <div className="flex flex-col gap-6 max-w-[741px]">
    <CartTotal />
    <PaymentMethod />
  </div>
</div>

  );
};

export default CheckoutSection;
