import { createSlice } from "@reduxjs/toolkit";

interface BlogState {
  blogIndex: number;
}

const initialState: BlogState = {
  blogIndex: 0,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    incrementBlogVal: (state) => {
      state.blogIndex += 1;
    },
    setBlogVal: (state, action) => {
      state.blogIndex = action.payload;
    },
  },
});

export const { incrementBlogVal, setBlogVal } = blogSlice.actions;
export default blogSlice.reducer;
export type TestBlogState = typeof initialState;
