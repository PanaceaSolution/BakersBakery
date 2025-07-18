import React from "react";

const SliderCards = ({ id, name, price, image }) => {
  return (
    <div className="w-[188px] h-[222px] p-2 text-center">
      <div className="w-[183px] h-[183px] mx-auto overflow-hidden rounded-full  justify-center  flex flex-col border border-purple-500 ">
        <div className="w-[169px] h-[169px] mx-auto overflow-hidden rounded-full bg-amber-200 ">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-2">
        <h3 className="text-sm font-semibold truncate">{name}</h3>
      </div>
    </div>
  );
};

export default React.memo(SliderCards);
