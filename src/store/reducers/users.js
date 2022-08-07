import { createSlice } from "@reduxjs/toolkit";
import { addToNewsLetter } from "../utils/thunks";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    action: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addToNewsLetter.fulfilled,(state,action)=>{
      state.action = action.payload
      
    })
  }
});

export default usersSlice.reducer;
