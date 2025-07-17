import React, { useState } from "react";
import cake from "../assets/cak.jpg"; 
import { Button } from "@mui/material";
import { FaStar } from "react-icons/fa";
const BestSellingCard = ({
  id,
  name,
  description,
  price,
  category,
  tags,
  images,
  isFeatured,
  available,
}) => {
  const [isdiscount, setIsdiscount] = useState(true);
  const [discount, setDiscount] = useState(7);

  const discountedPrice = price - price * (discount / 100);

  return (
    <div className="w-[355px] h-[364px] rounded-[10px] shadow relative bg-white tracking-wide">
      {/* Discount badge */}
      {isdiscount && (
        <div className="absolute bg-red-600 text-white px-2 rounded-t-[10px] w-[97px] h-[27px] ">
          {discount}% OFF
        </div>
      )}

      {/* Product Image */}
      <div className=" h-[200px] flex  overflow-hidden rounded-t-[10px] ">
        <img
          src={cake}
          alt={name}
          className="h-full object-cover min-w-full "
        />
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col p-2">
        <h2 className="text-lg  flex justify-between font-medium ">
          {name}
          {isdiscount && (
            <span className="font-[400]   text-gray-400 ">
              Rs. <span className="line-through">{price}</span>
            </span>
          )}
        </h2>

        <div className="mt-2 flex justify-end">
          {/* <span className="flex">
            <FaStar color="#FFD700" size={18} />
            <FaStar color="#FFD700" size={18} />
            <FaStar color="#FFD700" size={18} />
            <FaStar color="#FFD700" size={18} />
            <FaStar color="#FFD700" size={18} />
          </span> */}
          <span className="text-xl font-medium">
            Rs. {isdiscount ? discountedPrice : price}
          </span>
        </div>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#8C1C32",
            borderRadius: "10px",
            padding: "10px",
            "&:hover": {
              backgroundColor: "#a1263d",
            },
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default React.memo(BestSellingCard);
