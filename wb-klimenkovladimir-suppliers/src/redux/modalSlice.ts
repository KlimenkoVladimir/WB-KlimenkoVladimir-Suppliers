import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  heading: string | null;
  isOpen: boolean;
  id: string | null;
  number: null | number;
  city: string | null;
  quantity: number | string | null;
  typeSuppliers: string | null;
  warehouse: string | null;
  status: string | null;
}

const initialState: ModalState = {
  heading: null,
  isOpen: false,
  id: null,
  number: null,
  city: null,
  quantity: null,
  typeSuppliers: null,
  warehouse: null,
  status: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        heading: string;
        id: string;
        number: number;
        city: string;
        quantity: number;
        typeSuppliers: string;
        warehouse: string;
        status: string;
      }>
    ) => {
      state.heading = action.payload.heading;
      state.isOpen = true;
      state.id = action.payload.id;
      state.number = action.payload.number;
      state.city = action.payload.city;
      state.quantity = action.payload.quantity;
      state.typeSuppliers = action.payload.typeSuppliers;
      state.warehouse = action.payload.warehouse;
      state.status = action.payload.status;
    },
    closeModal: (state) => {
      state.heading = null;
      state.isOpen = false;
      state.id = null;
      state.number = null;
      state.city = null;
      state.quantity = null;
      state.typeSuppliers = null;
      state.warehouse = null;
      state.status = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
