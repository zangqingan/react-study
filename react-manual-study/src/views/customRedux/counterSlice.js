import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    user: {
      name: "张三",
      age: 18,
    },
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateUserName: (state, action) => {
      state.user.name = action.payload;
    },
    updateUserAge: (state, action) => {
      state.user.age = action.payload;
    },
  },
});

// 导出 actions 和 reducer
export const {
  increment,
  decrement,
  incrementByAmount,
  reset,
  updateUser,
  updateUserName,
  updateUserAge,
} = counterSlice.actions;
export default counterSlice.reducer;

// 导出选择器
export const selectCount = (state) => state.counter.value;
export const selectUserName = (state) => state.counter.user.name;
export const selectUserAge = (state) => state.counter.user.age;
