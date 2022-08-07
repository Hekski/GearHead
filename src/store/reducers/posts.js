import { createSlice } from "@reduxjs/toolkit";
import { postsRequest, requestById } from "../utils/thunks";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: true,
    articles: {
      items: [],
    },
  },
  reducers: {
    clearPostById: (state, action) => {
      state.postById = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postsRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(postsRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(postsRequest.rejected, (state) => {
        state.loading = false;
      })
      .addCase(requestById.pending, (state) => {
        state.loading = true;
      })
      .addCase(requestById.fulfilled, (state, action) => {
        state.loading = false;
        state.postById = action.payload;
      })
      .addCase(requestById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearPostById } = postsSlice.actions;
export default postsSlice.reducer;
