import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
  method: string;
}

const initialState: SortState = {
  method: "number",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortMethod: (state, action: PayloadAction<string>) => {
      state.method = action.payload;
    },
  },
});

export const { setSortMethod } = sortSlice.actions;

export default sortSlice.reducer;
