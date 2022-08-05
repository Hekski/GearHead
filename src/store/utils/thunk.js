import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const SERV_URL = "http://localhost:3001";

export const postsRequest = createAsyncThunk(
  "posts/postsRequest",
  async ({ page = 1, order = "asc", limit = "10" }, { getState }) => {
    try {
      // http://localhost:3001/posts?_page=1&_limit=6&_order=desc&_sort=id

      const response = await axios.get(
        `${SERV_URL}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`
      );
      const prevState = getState().posts;
      return {
        items: [...prevState.articles.items, ...response.data],
        page: page,
        end: response.data.length === 0 ? true : false
      };

    } catch (err) {}
  }
);

export const requestById = createAsyncThunk(
    'posts/requestById',
    async (id) => {
        try {
            const response = await axios.get(
                `${SERV_URL}/posts/${id}`
            )
            return response.data;

        } catch (err) {
            throw err
        }
    }
)
