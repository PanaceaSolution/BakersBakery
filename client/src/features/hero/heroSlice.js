import { createSlice } from "@reduxjs/toolkit";

const categoryData = {
  "home": {
    image: "/assets/HeroSection/one.png",
    heading: "Bake Your Dreams Into Reality",
    subtext: "Find the perfect treat for every celebration — made with love, baked to perfection.",
    primaryBtn: { text: "Customize your Cake", link: "/customize" },
    secondaryBtn: { text: "Order Now", link: "/shop" },
  },
  "birthday-cake": {
    image: "/assets/HeroSection/two.png",
    heading: "Make Their Day Memorable",
    subtext: "Free candles and message card on all birthday cakes",
    primaryBtn: { text: "Shop Birthday Cakes", link: "/birthday-cakes" },
    secondaryBtn: { text: "Explore More", link: "/shop" },
  },
  "model-cake": {
    image: "/assets/HeroSection/three.png",
    heading: "Model Cakes: Fashionably Delicious",
    subtext: "Exclusive limited-edition designer cakes.",
    primaryBtn: { text: "Order Limited Edition Now", link: "/modal-cakes" },
    secondaryBtn: { text: "Explore More", link: "/shop" },
  },
};

const heroSlice = createSlice({
  name: "hero",
  initialState: categoryData["home"],
  reducers: {
    setHeroByCategory: (state, action) => {
      const slug = action.payload;
      return categoryData[slug] || state;
    },
  },
});

export const { setHeroByCategory } = heroSlice.actions;
export default heroSlice.reducer;
export { categoryData };
