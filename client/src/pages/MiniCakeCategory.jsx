import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeroByCategory } from "../features/hero/heroSlice";

const MiniCakeCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeroByCategory("mini-cake"));
  }, [dispatch]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold my-8">Mini Cakes</h2>
      <p className="mb-8">Our delicious mini cakes - perfect for small celebrations!</p>
    </div>
  );
};

export default MiniCakeCategory;