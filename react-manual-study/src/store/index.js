import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../views/customRedux/counterSlice";
import postReducer from "../views/post/postSlice";
import usersReducer from "../views/users/usersSlice";
import { use } from "react";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    users: usersReducer,
  },
});
