import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeroByCategory } from "../features/hero/heroSlice";

const BirthdayCakeCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeroByCategory("birthday-cake"));
  }, [dispatch]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold my-8">Birthday Cakes</h2>
      <p className="mb-8">Make their day memorable with our special birthday cakes!</p>
    </div>
  );
};

export default BirthdayCakeCategory;