import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeroByCategory } from "../features/hero/heroSlice";

const BabyShowerCakeCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeroByCategory("baby-shower-cake"));
  }, [dispatch]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold my-8">Baby Shower Cakes</h2>
      <p className="mb-8">Celebrate new arrivals with our specially designed baby shower cakes!</p>
    </div>
  );
};

export default BabyShowerCakeCategory;