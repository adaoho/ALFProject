import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalHeader: false,
  modalBody: false,
  modalConfirmation: false,
  loading: false,
  error: {},
  drawerComment: false,
  showSessionExpiredToast: false,
  refresh: false,
  postItems: [],
  drawerHeader: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setRefresh(state) {
      state.refresh = !state.refresh;
    },
    setModalHeader(state, action) {
      state.modalHeader = action.payload;
    },
    setModalBody(state, action) {
      state.modalBody = action.payload;
    },
    setModalConfirmation(state, action) {
      state.modalConfirmation = action.payload;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setDrawerComment(state, action) {
      state.drawerComment = action.payload;
    },
    setCloseModal(state) {
      state.modalBody = false;
      state.modalHeader = false;
      state.modalConfirmation = false;
    },
    setSessionExpiredToast(state, action) {
      state.showSessionExpiredToast = action.payload;
    },
    setPostItems(state, action) {
      state.postItems = action.payload;
    },
    setDrawerHeader(state, action) {
      state.drawerHeader = action.payload;
    },
  },
});

export const {
  setDrawerHeader,
  setPostItems,
  setRefresh,
  setSessionExpiredToast,
  setDrawerComment,
  setModalBody,
  setModalHeader,
  setModalConfirmation,
  setCloseModal,
  setLoading,
  setError,
} = mainSlice.actions;

export default mainSlice.reducer;
