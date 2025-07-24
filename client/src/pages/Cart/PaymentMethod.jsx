import React, { useState } from "react";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const [agree, setAgree] = useState(false);

  return (
    <div
      className="w-full max-w-[741px] min-h-[773px] bg-white rounded-[10px] shadow-md p-6 flex flex-col gap-6 font-poppins"
      style={{ opacity: 1 }}
    >
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">Payment Method</h2>

      {/* Payment Options */}
      <div className="space-y-4">
        {/* Bank Transfer */}
        <label className="flex items-start gap-3">
          <input
            type="radio"
            name="payment"
            checked={selectedMethod === "bank"}
            onChange={() => setSelectedMethod("bank")}
            className="accent-[#8C1C32] w-5 h-5 mt-1"
          />
          <div className="flex flex-col gap-2">
            <span className="text-base font-medium text-gray-800">
              Manual QR or Bank Transfer
            </span>
            {selectedMethod === "bank" && (
              <div className="bg-gray-100 rounded-md p-4 space-y-2">
                <p className="text-sm text-gray-700">
                  Make your payment directly into our bank account and send a
                  screenshot to <strong>abc@gmail.com</strong> or Viber/WhatsApp
                  at <strong>986******* </strong>
                </p>
                {/* QR Code Placeholder */}
                <div className="w-24 h-24 bg-[#8C1C32] rounded-sm flex items-center justify-center text-white font-bold">
                  Open Bank QR
                </div>
                {/* Bank Details */}
                <div className="space-y-1 text-sm text-gray-700">
                  <p className="font-semibold">Bank Details</p>
                  <p>Account Name: ------</p>
                  <p>First Name: ------</p>
                  <p>Last Name: ------</p>
                  <p>Account Number: 0**************</p>
                  <p>Bank Name: ------</p>
                  <p>Swift Code: ------</p>
                  <p>Phone: 98********</p>
                </div>
              </div>
            )}
          </div>
        </label>

        {/* Esewa */}
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            checked={selectedMethod === "esewa"}
            onChange={() => setSelectedMethod("esewa")}
            className="accent-[#8C1C32] w-5 h-5"
          />
          <span className="text-base font-medium text-gray-800">Esewa</span>
        </label>

        {/* Cash On Delivery */}
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            checked={selectedMethod === "cod"}
            onChange={() => setSelectedMethod("cod")}
            className="accent-[#8C1C32] w-5 h-5"
          />
          <span className="text-base font-medium text-gray-800">Cash On Delivery</span>
        </label>
      </div>

      {/* Privacy Policy */}
      <p className="text-sm text-gray-600">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our <strong className="text-gray-800">privacy policy</strong>.
      </p>

      {/* Terms Checkbox */}
      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
          className="accent-[#8C1C32] w-4 h-4"
        />
        <span>
          I have read and agree to the website{" "}
          <strong className="text-gray-800">terms and conditions</strong>{" "}
          <span className="text-red-500">*</span>
        </span>
      </label>

      {/* Place Order Button */}
      <button
        disabled={!agree}
        className={`w-full max-w-[677px] mx-auto text-center bg-[#8C1C32] text-white py-3 rounded-[10px] font-medium transition ${
          agree ? "hover:bg-[#721026]" : "opacity-50 cursor-not-allowed"
        }`}
        style={{
          height: "44px",
          padding: "10px",
          gap: "10px",
          opacity: 1,
        }}
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default PaymentMethod;
