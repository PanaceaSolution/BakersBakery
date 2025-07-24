import React from "react";
import DeliveryZoneCard from "./DeliveryZoneCard";
import CheckAreaButton from "./CheckAreaButton";

const DeliveryZoneContainer = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {/* Top Row: Two Small Cards */}
      <div className="flex gap-[20px]">
        <DeliveryZoneCard
          title="Free Zone"
          area="Within 5km of bakery"
          deliveryTime="1–3 hours"
        />
        <DeliveryZoneCard
          title="Standard Zone"
          area="5–10km from bakery"
          deliveryTime="3–6 hours"
        />
      </div>

      {/* Bottom Row: One Large Card spanning full width */}
      <DeliveryZoneCard
        title="Extended Zone"
        area="Above 10km from bakery, special charge may apply"
        deliveryTime="6–12 hours"
        width={743}
      />
       <CheckAreaButton />
    </div>
  );
};

export default DeliveryZoneContainer;
