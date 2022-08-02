import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./reducers/posts";
import UserReducer from "./reducers/users";

export const store = configureStore({
  reducer: {
    posts: PostReducer,
    users: UserReducer
  },
});
