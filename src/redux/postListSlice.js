import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsList: [],
};

const postsListSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addListOfPost(state, action) {
      state.postsList = action.payload;
    },
    toggleFavourite(state, action) {
      state.postsList = state.postsList.map((item) =>
        item.id === action.payload
          ? { ...item, isFavourite: !item.isFavourite }
          : item
      );
    },
  },
});

export const { addListOfPost, toggleFavourite } = postsListSlice.actions;
export default postsListSlice.reducer;
