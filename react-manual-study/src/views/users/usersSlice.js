import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "张三" },
  { id: "1", name: "李四" },
  { id: "2", name: "王五" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) =>
  state.users.find((user) => user.id === userId);
