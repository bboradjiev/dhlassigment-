import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("data/getData", async () => {
  return fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
    res.json()
  );
});

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = "loading";
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [getData.rejected]: (state, action) => {
      state.status = "failer";
    },
  },
});

export default dataSlice.reducer;
