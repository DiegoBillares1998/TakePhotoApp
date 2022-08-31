import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
  name: "photo",
  initialState: { photos: [] },
  reducers: {
    addPhoto(state, action) {
        state.photos.push(action.payload);
    },
    setPhotos(state, action) {
        state.photos = action.payload;
    },
  },
});

export const photoActions = photoSlice.actions;

export default photoSlice;