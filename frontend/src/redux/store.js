import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./slice/RecipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeSlice,
  },
});
