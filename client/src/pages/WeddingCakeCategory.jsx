import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeroByCategory } from "../features/hero/heroSlice";

const WeddingCakeCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeroByCategory("wedding-cake"));
  }, [dispatch]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold my-8">Wedding Cakes</h2>
      <p className="mb-8">Make your special day even more memorable with our wedding cakes!</p>
      
      {/* wedding cake products*/}
    </div>
  );
};

export default WeddingCakeCategory;