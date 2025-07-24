import { Button, CircularProgress } from "@mui/material";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductHolder = ({ Title, subTitle, banner }) => {
  const { products: cake, status } = useSelector((state) => state.product);

  return (
    <div className="w-screen">
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

        {status === "loading" && (
          <div className="flex justify-center items-center">
            <CircularProgress
              sx={{
                color: "#CF294A", 
                size: 50, 
              }}
            />
          </div>
        )}

        {status === "error" && (
          <p className="text-red-600">Failed to fetch products.</p>
        )}

        {status === "success" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-21">
            {cake.length > 0 ? (
              cake.map((product) => (
                <div key={product.id}>
                  <ProductCard {...product} />
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductHolder;
