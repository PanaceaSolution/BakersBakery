import React, { useState } from "react";
import { Button } from "@mui/material";

const ProductCard = ({
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
  const [isdiscount] = useState(true);
  const [discount] = useState(7);

  const discountedPrice = price - price * (discount / 100);

  return (
    <div className="w-[355px] h-[364px] rounded-[10px] shadow relative bg-white tracking-wide">
      {/* Discount badge */}
      {isdiscount && (
        <div className="absolute bg-red-600 text-white px-2 rounded-t-[10px] w-[97px] h-[27px]">
          {discount}% OFF
        </div>
      )}

      {/* Product Image */}
      <div className="h-[200px] flex overflow-hidden rounded-t-[10px]">
        <img
          src={images?.[0] || "https://kreamz.in/wp-content/uploads/2024/02/chocolate-truffle-cake.webp"}
          className="h-full object-fill min-w-full"
        />
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col p-2">
        <h2 className="text-lg flex justify-between font-medium">
          {name}
          {isdiscount && (
            <span className="font-[400] text-gray-400">
              Rs. <span className="line-through">{price}</span>
            </span>
          )}
        </h2>

        <div className="mt-2 flex justify-end">
          <span className="text-xl font-medium">
            Rs. {isdiscount ? discountedPrice.toFixed(2) : price}
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

export default ProductCard;
