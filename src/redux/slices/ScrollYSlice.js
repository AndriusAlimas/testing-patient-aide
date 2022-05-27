import { createSlice } from "@reduxjs/toolkit";

export const scrollYSlice = createSlice({
  name: "scrollYStatus",
  initialState: {
    scrollYStatus: "top",
  },
  reducers: {
    setScrollYStatus: (state, action) => {
      state.scrollYStatus = action.payload;
    },
  },
});

export const { setScrollYStatus } = scrollYSlice.actions;
export default scrollYSlice.reducer;
