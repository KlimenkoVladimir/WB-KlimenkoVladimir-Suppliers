import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Supplier from "../types/Suppliers";

export const fetchSuppliers = createAsyncThunk<Supplier[], string | undefined>(
  "suppliers/fetchSuppliers",
  async (sort) => {
    const response = await fetch(
      `http://localhost:4000/suppliers?_sort=${sort}`
    );
    const data = await response.json();
    return data;
  }
);

interface SuppliersState {
  suppliers: Supplier[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SuppliersState = {
  suppliers: [],
  status: "idle",
  error: null,
};

const suppliersSlice = createSlice({
  name: "suppliers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuppliers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSuppliers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.suppliers = action.payload;
      })
      .addCase(fetchSuppliers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default suppliersSlice.reducer;
