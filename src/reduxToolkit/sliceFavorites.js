import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "data",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      return { favorites: [...state.favorites, action.payload] };
    },
    removeFavorite: (state, action) => {
      let removingFav = state.favorites.filter(
        (el) => el.id !== action.payload
      );
      return {
        favorites: [...removingFav],
      };
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
