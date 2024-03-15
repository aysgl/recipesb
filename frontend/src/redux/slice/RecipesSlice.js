import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setRecipes, setError, setLoading } = recipeSlice.actions;

export const getRecipes = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get("http://localhost:8080/api/recipes");
    const recipes = response.data;
    dispatch(setRecipes(recipes));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getRecipesQuery = (query) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { title, category, ingredients } = query;
    const response = await axios.get(
      `http://localhost:8080/api/recipes?title=${title}&category=${category}&ingredients=${ingredients}`
    );
    const recipes = response.data;
    dispatch(setRecipes(recipes));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getRecipesId = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get(`http://localhost:8080/api/recipes/${id}`);
    const recipe = response.data;
    dispatch(setRecipes(recipe));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getRecipesParams = (order) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get(
      `http://localhost:8080/api/recipes?order=${order}`
    );
    const recipes = response.data;
    dispatch(setRecipes(recipes));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const postRecipe = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.post(
      `http://localhost:8080/api/recipes`,
      data
    );
    const recipes = response.data;
    dispatch(setRecipes(recipes));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const deleteRecipes = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    await axios.delete(`http://localhost:8080/api/recipes/${id}`);
    dispatch(setRecipes());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default recipeSlice.reducer;
