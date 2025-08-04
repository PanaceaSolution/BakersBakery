import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FiCalendar } from "react-icons/fi";

const BillingForm = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date.toLocaleDateString());
    setShowCalendar(false);
  };

  return (
    <div
      className="bg-white rounded-[10px] shadow-md p-6 sm:p-8 md:p-10 w-full max-w-[973px]"
      style={{ height: "1354px" }}
    >
      <h2 className="text-2xl font-semibold mb-6 font-poppins">Billing Details</h2>

      {/* Form Fields */}
      <form className="space-y-5 font-poppins">
        {/* Sender’s Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Sender’s Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sender’s Phone Number */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Sender’s Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="We need this to contact you regarding your order"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sender’s Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Sender’s Email
          </label>
          <input
            type="email"
            placeholder="We will email you regarding your order"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Delivery Location */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Delivery Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Precise location to destination"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Receiver Contact Number (1st) */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Receiver Contact Number (1<sup>st</sup>){" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Receiver Contact Number (2nd) */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Receiver Contact Number (2<sup>nd</sup>) (Optional)
          </label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Delivery Date */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Delivery Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={selectedDate}
              placeholder="Select Date"
              readOnly
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <FiCalendar size={20} />
            </button>
            {showCalendar && (
              <div className="absolute z-10 mt-2">
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate ? new Date(selectedDate) : new Date()}
                />
              </div>
            )}
          </div>
        </div>

        {/* Time Slot for Delivery */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Time Slot for Delivery (Optional)
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Select Time Slot</option>
            <option>Morning (9 AM - 12 PM)</option>
            <option>Afternoon (12 PM - 3 PM)</option>
            <option>Evening (3 PM - 6 PM)</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="E.g. Happy Birthday my Love!"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Upload Photo */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Upload Photo (Optional)
          </label>
          <input
            type="file"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Order Notes */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Order Notes (Optional)
          </label>
          <textarea
            placeholder="Notes about your order, e.g. special notes for delivery."
            rows="3"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
