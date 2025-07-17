import { Button } from "@mui/material";
import ProductCard from "./ProductCard";
import cake from "../assets/cake.json";

const ProductHolder = ({ Title, subTitle }) => {
  return (
    <div className="flex flex-col gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h2 className="font-semibold text-2xl">{Title}</h2>
          <p className="text-gray-600">{subTitle}</p>
        </div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#CF294A",
            borderRadius: "10px",
            padding: "10px 20px",
            height: "44px",
            minWidth: "153px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#a1263d",
            },
          }}
        >
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   xl:grid-cols-4  gap-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div key={idx}>
            <ProductCard {...cake} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHolder;
