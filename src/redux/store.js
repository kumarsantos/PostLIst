import { configureStore } from "@reduxjs/toolkit";
import postListSlice from "./postListSlice";

export const store = configureStore({
  reducer: {
    posts: postListSlice,
  },
});
