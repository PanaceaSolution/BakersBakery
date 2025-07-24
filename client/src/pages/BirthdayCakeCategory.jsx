import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeroByCategory } from "../features/hero/heroSlice";
import TextBlock from '../components/TextBlock/TextBlock';

const BirthdayCakeCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeroByCategory("birthday-cake"));
  }, [dispatch]);

  return (
    <div>
        <TextBlock
  heading="Birthday Cakes - Make Their Day Memorable"
  subheading="Free candles and message card on all birthday cakes"
/>
    </div>
  );
};

export default BirthdayCakeCategory;