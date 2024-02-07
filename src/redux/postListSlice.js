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
  },
});

export const { addListOfPost } = postsListSlice.actions;
export default postsListSlice.reducer;
