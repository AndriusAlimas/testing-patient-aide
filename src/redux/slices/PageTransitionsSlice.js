import { createSlice } from "@reduxjs/toolkit";

const PageTransitionsSlice = createSlice({
  name: "pageTransitions",
  initialState: {
    pageTransitionsStyle: {
      initial: { scale: (0, 0.8), opacity: 0 },
      animate: { scale: (0, 1), opacity: 1 },
      end: { scale: (0, 0.8), opacity: 0 },
      transition: { duration: 0.1 },
    },
  },
});

export default PageTransitionsSlice.reducer;
