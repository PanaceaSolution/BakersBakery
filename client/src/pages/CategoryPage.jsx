import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHeroByCategory } from "../features/hero/heroSlice";

const CategoryPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeroByCategory(slug));
  }, [slug, dispatch]);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-8 capitalize">{slug.replace("-", " ")}</h2>
      {/* Category-specific content goes here */}
      <p>Show all products for {slug}</p>
    </div>
  );
};

export default CategoryPage;
