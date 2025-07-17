import React, { useState } from "react";

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
  const [isdiscount, setIsdiscount] = useState(true);
  const [discount, seDiscount] = useState(7);
  return (
    <div className="w-[355px] h-[364px] rounded-[10px]">
      {isdiscount && (
        <div className=" bg-red-600 text-white w-[97px] h-[27px]">
          ${discount}% off{" "}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
