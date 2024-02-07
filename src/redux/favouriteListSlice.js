import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouritesList: [],
};

const favouriteListSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavouriteToList(state, action) {
      state.favouritesList.push(action.payload);
    },
    removeFromFavouriteList(state, action) {
      state.favouritesList = state.favouritesList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addFavouriteToList, removeFromFavouriteList } =
  favouriteListSlice.actions;
export default favouriteListSlice.reducer;
