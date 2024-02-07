import { configureStore } from "@reduxjs/toolkit";
import postListSlice from "./postListSlice";
import favouriteListSlice from "./favouriteListSlice";

export const store = configureStore({
  reducer: {
    postsList: postListSlice,
    favouritesList: favouriteListSlice,
  },
});
