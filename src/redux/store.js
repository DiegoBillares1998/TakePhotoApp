import { configureStore } from '@reduxjs/toolkit'
import photoSlice from './photo-slice'

const Store = configureStore({
    reducer: {
        photoStore: photoSlice.reducer,
    },
  });
  export default Store;